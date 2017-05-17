import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import styles from './styles';
import getStyles from './get-styles';
import combineStyles from '../internal/combine-styles';
import themeable from '../themeable';

/** Animated loader */
const Loader = ({ inverted, style, dotStyle, color, ...custom }) => (
  <div style={combineStyles(styles.loader, style)} {...custom}>
    <span style={getStyles.root(color, inverted, 0, dotStyle)} />
    <span style={getStyles.root(color, inverted, 1, dotStyle)} />
    <span style={getStyles.root(color, inverted, 2, dotStyle)} />
  </div>
);

Loader.displayName = 'Loader';

Loader.propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the dot element */
  dotStyle: PropTypes.instanceOf(Object),
  /** Inverts the color */
  inverted: PropTypes.bool,
  color: PropTypes.string.isRequired
};

Loader.defaultProps = {
  style: {},
  dotStyle: {},
  inverted: false
};

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Loader);
