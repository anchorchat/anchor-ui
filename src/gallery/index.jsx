import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import styles from './styles';
import getStyles from './get-styles';
import Lightbox from '../lightbox';

/** Justified grid layout for showcasing images. */
class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightbox: {}
    };
  }

  showLightbox = (item) => {
    this.setState({
      lightbox: item
    });
  }

  hideLightbox = () => {
    this.setState({
      lightbox: {}
    });
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
      ...custom
    } = this.props;
    const { lightbox } = this.state;

    return (
      <section style={getStyles.root(style)} {...custom}>
        {map(items, (item, index) => {
          let onClick = event => onItemClick(event, item);

          if (enableLightbox) {
            onClick = () => this.showLightbox(item);
          }

          return (
            <div
              style={getStyles.itemContainer(itemHeight, enableLightbox, itemContainerStyle)}
              key={`gallery-${index}`}
              onClick={onClick}
            >
              <img
                src={item.src}
                alt={item.alt || item.src}
                style={getStyles.item(itemHeight, itemStyle)}
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
      </section>
    );
  }
}

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
  /**
   * Array of objects containing gallery images.
   * Each object must have a 'src' key, 'alt' and 'title' are optional
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      title: PropTypes.node
    })
  ).isRequired,
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
  enableLightbox: PropTypes.bool
};

Gallery.defaultProps = {
  itemHeight: 320,
  onItemClick: () => {},
  style: {},
  itemContainerStyle: {},
  itemStyle: {},
  enableLightbox: false
};

export default Radium(Gallery);
