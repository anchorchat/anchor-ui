import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import Radium from 'radium';
import styles from '../style/avatars';

function getStyle(image, overrideStyle) {
  const style = { ...styles.avatar, backgroundImage: `url(${image})` };

  if (Object.keys(overrideStyle).length !== 0) {
    return Object.assign(style, overrideStyle);
  }

  return style;
}

/**
 * Avatar styling
 */
function Avatar({ image, style }) {
  return (
    <section style={getStyle(image, style)} />
  );
}

Avatar.propTypes = {
  /**
   * Path to user's profile image
   */
  image: PropTypes.string.isRequired,
  /**
   * Override the styles of the root element
   */
  style: PropTypes.instanceOf(Object)
};

Avatar.defaultProps = {
  style: {}
};

export default pure(Radium(Avatar));
