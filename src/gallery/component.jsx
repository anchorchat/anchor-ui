import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import size from 'lodash/size';
import EventListener from 'react-event-listener';
import styles from './styles';
import getStyles from './get-styles';
import Lightbox from '../lightbox';
import ImageLoader from '../image-loader';

const displayName = 'Gallery';

const propTypes = {
  /**
   * Array of objects containing gallery images.
   * Each object must have a 'src' key, 'alt' and 'title' are optional
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    title: PropTypes.node
  })).isRequired,
  /** Height of the items within the gallery */
  itemHeight: PropTypes.number,
  /**
   * Callback fired when a Gallery's item is clicked, only works if enableLightbox equals false
   *
   * function(event: object, image: object) => void
   */
  onItemClick: PropTypes.func,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the image container element */
  itemContainerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the image element */
  itemStyle: PropTypes.instanceOf(Object),
  /** Open a Lightbox when an item is clicked */
  enableLightbox: PropTypes.bool,
  /** Image placeholder url */
  imagePlaceholder: PropTypes.string,
  /** Image error url */
  imageError: PropTypes.string
};

const defaultProps = {
  itemHeight: 320,
  onItemClick: () => {},
  style: {},
  itemContainerStyle: {},
  itemStyle: {},
  enableLightbox: false,
  imagePlaceholder: 'https://cdn.anchor.fish/client/assets/defaults/picture.f682bf93.jpg',
  imageError: 'https://cdn.anchor.fish/client/assets/defaults/error.2838da1f.jpg',
};

/** Justified grid layout for showcasing images. */
class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightbox: {},
      selectedIndex: 0
    };
  }

  showLightbox = (item, index) => {
    this.setState({
      lightbox: item,
      selectedIndex: index
    });
  }

  hideLightbox = () => {
    this.setState({
      lightbox: {}
    });
  }

  handleKeyUp = (event) => {
    const key = event.which || event.keyCode;
    const { lightbox } = this.state;

    if (isEmpty(lightbox)) {
      return false;
    }

    if (key === 39) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return this.selectNext();
    }

    if (key === 37) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return this.selectPrevious();
    }

    return false;
  }

  selectNext = () => {
    const { items } = this.props;
    const { selectedIndex } = this.state;
    const gallerySize = size(items);
    const newIndex = selectedIndex + 1;

    if (newIndex < gallerySize) {
      return this.showLightbox(items[newIndex], newIndex);
    }

    if (newIndex === gallerySize) {
      return this.showLightbox(items[0], 0);
    }

    return false;
  }

  selectPrevious = () => {
    const { items } = this.props;
    const { selectedIndex } = this.state;
    const gallerySize = size(items);
    const newIndex = selectedIndex - 1;

    if (selectedIndex === 0) {
      return this.showLightbox(items[gallerySize - 1], gallerySize - 1);
    }

    if (newIndex < gallerySize) {
      return this.showLightbox(items[newIndex], newIndex);
    }

    return false;
  }

  render() {
    const {
      items,
      itemHeight,
      onItemClick,
      style,
      itemContainerStyle,
      itemStyle,
      enableLightbox,
      imagePlaceholder,
      imageError,
      ...custom
    } = this.props;
    const { lightbox } = this.state;

    const placeholder = <img style={getStyles.item(itemHeight, itemStyle)} src={imagePlaceholder} alt="placeholder" />;
    const error = <img style={getStyles.item(itemHeight, itemStyle)} src={imageError} alt="error" />;
    const imgProps = {
      style: getStyles.item(itemHeight, itemStyle)
    };

    return (
      <section style={getStyles.root(style)} {...custom}>
        {map(items, (item, index) => {
          let onClick = event => onItemClick(event, item);

          if (enableLightbox) {
            onClick = () => this.showLightbox(item, index);
          }

          return (
            <div
              style={getStyles.itemContainer(itemHeight, enableLightbox, itemContainerStyle)}
              key={`gallery-${index}`}
              onClick={onClick}
            >
              <ImageLoader
                src={item.src}
                alt={item.alt || item.src}
                imgProps={imgProps}
                placeholder={placeholder}
                error={error}
              />
            </div>
          );
        })}
        <div style={styles.after} />
        {
          enableLightbox && !isEmpty(lightbox)
          ? <Lightbox
            open={!isEmpty(lightbox)}
            image={lightbox.src}
            title={lightbox.title}
            hideLightbox={this.hideLightbox}
          />
          : null
        }
        <EventListener target="window" onKeyUp={this.handleKeyUp} />
      </section>
    );
  }
}

Gallery.displayName = displayName;
Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;

export default Gallery;
