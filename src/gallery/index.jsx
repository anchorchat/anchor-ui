import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import map from 'lodash/map';
import styles from './styles';
import getStyles from './get-styles';

/** An image gallery shapping images to the same size */
const Gallery = ({ items, itemHeight, onItemClick, style, itemContainerStyle, itemStyle }) => (
  <section style={getStyles.root(style)}>
    {map(items, (item, index) => (
      <div
        style={getStyles.imageContainer(itemHeight, itemContainerStyle)}
        key={`gallery-${index}`}
        onClick={event => onItemClick(event, item)}
      >
        <img
          src={item.src}
          alt={item.alt}
          style={getStyles.image(itemHeight, itemStyle)}
        />
      </div>
    ))}
    <div style={styles.after} />
  </section>
);

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
  /** Array of paths to the galleries images */
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })).isRequired,
  /** Height of the images within the gallery */
  itemHeight: PropTypes.number,
  /**
   * Callback fired when a Gallery's image container is clicked
   *
   * function(event: object, image: object) => void
   */
  onItemClick: PropTypes.func,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the image container element */
  itemContainerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the image element */
  itemStyle: PropTypes.instanceOf(Object)
};

Gallery.defaultProps = {
  itemHeight: 320,
  onItemClick: null,
  style: {},
  itemContainerStyle: {},
  itemStyle: {}
};

export default Radium(Gallery);
