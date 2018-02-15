import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import getStyles from './get-styles';
import themeable from '../themeable';

const displayName = 'Loader';

const propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the dot element */
  dotStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Inverts the color */
  inverted: PropTypes.bool,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  dotStyle: {},
  inverted: false
};

/** Animated loader */
const Loader = ({
  inverted, style, dotStyle, color, ...custom
}) => (
  <div style={getStyles.root(style)} {...custom}>
    <span style={getStyles.dot(color, inverted, 0, dotStyle)} />
    <span style={getStyles.dot(color, inverted, 1, dotStyle)} />
    <span style={getStyles.dot(color, inverted, 2, dotStyle)} />
  </div>
);

Loader.displayName = displayName;
Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Loader);
