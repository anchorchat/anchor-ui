import React from 'react';
import PropTypes from 'prop-types';
import isNumber from 'lodash/isNumber';
import getStyles from './get-styles';

/** Used for displaying a (notification) counter */
const Badge = ({
  value, maxValue, inverted, style, color, ...custom
}) => {
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
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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

export default Badge;
