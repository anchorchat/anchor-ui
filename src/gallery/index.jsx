import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import map from 'lodash/map';
import getStyles from './get-styles';

/** An image gallery shapping images to the same size */
const Gallery = ({ images, imageHeight, onItemClick, style, imageContainerStyle, imageStyle }) => (
  <section style={getStyles.root(style)}>
    {map(images, (image, index) => (
      <div
        style={getStyles.imageContainer(imageHeight, imageContainerStyle)}
        key={`${image.id || 'image'}-${index}`}
        onClick={onItemClick}
      >
        <img
          src={image.src}
          alt={image.alt}
          style={getStyles.image(imageHeight, imageStyle)}
        />
      </div>
    ))}
  </section>
);

Gallery.displayName = 'Gallery';

Gallery.propTypes = {
  /** Array of paths to the galleries images */
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    id: PropTypes.string
  })).isRequired,
  /** Height of the images within the gallery */
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Callback fired when an image container is clicked
   *
   * function(event: object) => void
   */
  onItemClick: PropTypes.func,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the image container element */
  imageContainerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the image element */
  imageStyle: PropTypes.instanceOf(Object)
};

Gallery.defaultProps = {
  imageHeight: null,
  onItemClick: null,
  style: {},
  imageContainerStyle: {},
  imageStyle: {}
};

export default Radium(Gallery);
