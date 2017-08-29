import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import isNumber from 'lodash/isNumber';
import getStyles from './get-styles';
import themeable from '../themeable';

/** Used for displaying a (notification) counter */
const Badge = ({ value, maxValue, inverted, style, color, ...custom }) => {
  let content = value;

  if (isNumber(maxValue) && value > maxValue) {
    content = `${maxValue}+`;
  }

  return (
    <span style={getStyles.root(color, inverted, style)} {...custom}>
      {content}
    </span>
  );
};

Badge.displayName = 'Badge';

Badge.propTypes = {
  /** The badge's value */
  value: PropTypes.number.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Inverts color */
  inverted: PropTypes.bool,
  /** Maximum value that will be shown.
   * This will result in `${maxValue}+` if value exceeds maxValue.
   */
  maxValue: PropTypes.number,
  color: PropTypes.string.isRequired
};

Badge.defaultProps = {
  style: {},
  inverted: false,
  maxValue: null
};

const enhance = compose(
  themeable(),
  Radium,
  pure
);

export default enhance(Badge);
