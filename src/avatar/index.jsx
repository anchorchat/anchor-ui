import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import styles from '../style/avatars';
import combineStyles from '../internal/combine-styles';

function getStyle(image, overrideStyle) {
  const style = combineStyles(styles.avatar, { backgroundImage: `url(${image})` });

  return combineStyles(style, overrideStyle);
}

/** An user's profile image */
function Avatar({ image, style, ...custom }) {
  return (
    <section style={getStyle(image, style)} {...custom} />
  );
}

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  /** Path to user's profile image */
  image: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

Avatar.defaultProps = {
  style: {}
};

export default pure(Radium(Avatar));
