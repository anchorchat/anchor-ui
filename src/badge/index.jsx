import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import styles from '../style/badges';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import themeable from '../themeable';

function getStyle(themeColor, inverted, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = combineStyles(styles.badge, { backgroundColor: color });
  const invertedStyle = combineStyles(styles.inverted, { color });

  if (inverted) {
    return combineStyles(combineStyles(style, invertedStyle), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

/** Used for displaying a (notification) counter */
const Badge = ({ value, maxValue, inverted, style, color, ...custom }) => {
  let content = value;

  if (value > maxValue) {
    content = `${maxValue}+`;
  }

  return (
    <span style={getStyle(color, inverted, style)} {...custom}>
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
   * This will result in `${maxValue}+` if value exceeds maxValue */
  maxValue: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

Badge.defaultProps = {
  style: {},
  inverted: false
};

const enhance = compose(
  themeable(),
  Radium,
  pure
);

export default enhance(Badge);
