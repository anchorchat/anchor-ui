import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import map from 'lodash/map';
import styles from './styles';
import getStyles from './get-styles';

/** Justified grid layout for showcasing images. */
const Gallery = ({
  items,
  itemHeight,
  onItemClick,
  style,
  itemContainerStyle,
  itemStyle,
  ...custom
}) => (
  <section style={getStyles.root(style)} {...custom}>
    {map(items, (item, index) => (
      <div
        style={getStyles.itemContainer(itemHeight, itemContainerStyle)}
        key={`gallery-${index}`}
        onClick={event => onItemClick(event, item)}
      >
        <img
          src={item.src}
          alt={item.alt}
          style={getStyles.item(itemHeight, itemStyle)}
        />
      </div>
    ))}
    <div style={styles.after} />
  </section>
);

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
  /** Array of objects containing gallery images, each object must have a 'src' and 'alt' key */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Height of the items within the gallery */
  itemHeight: PropTypes.number,
  /**
   * Callback fired when a Gallery's item is clicked
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
