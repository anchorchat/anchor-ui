import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import pure from 'recompose/pure';
import Uranium from 'uranium';
import styles from '../style/avatars';
import combineStyles from '../internal/combine-styles';

function getStyle(image, overrideStyle) {
  const style = combineStyles(styles.avatar, { backgroundImage: `url(${image})` });

  return combineStyles(style, overrideStyle);
}

/** A user's profile image */
function Avatar({ image, style }) {
  return (
    <section style={getStyle(image, style)} />
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

export default pure(Uranium(Avatar));
