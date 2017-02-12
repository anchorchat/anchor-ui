import React, { Component, PropTypes } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import styles from '../style/badges';
import { colors } from '../settings';
import combineStyles from '../internal/combine-styles';

function getStyle(themeColor, inverted, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = { ...styles.badge, backgroundColor: color };
  const invertedStyle = { ...styles.inverted, color };

  if (inverted) {
    return combineStyles(combineStyles(style, invertedStyle), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

/**
 * Used for displaying a (notification) counter
 */
class Badge extends Component {
  static displayName = 'Badge';
  static propTypes = {
    /**
     * The badge's value
     */
    value: PropTypes.number.isRequired,
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object),
    /**
     * Inverts color
     */
    inverted: PropTypes.bool,
    /**
     * Max value that will be renderend
     * This will result in `${maxValue}+` if value exceeds value
     */
    maxValue: PropTypes.number.isRequired
  }

  static defaultProps = {
    style: {},
    inverted: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const { value, maxValue, inverted, style } = this.props;
    const { color } = this.context;

    let content = value;

    if (value > maxValue) {
      content = `${maxValue}+`;
    }

    return (
      <span style={getStyle(color, inverted, style)}>
        {content}
      </span>
    );
  }
}

export default Radium(Badge);
