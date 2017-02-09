import React, { Component, PropTypes } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import styles from '../style/badges';
import colors from '../style/colors';

function getStyle(themeColor, inverted, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = { ...styles.badge, backgroundColor: color };
  const invertedStyle = { ...styles.inverted, color };

  if (inverted) {
    return Object.assign(style, invertedStyle);
  }

  if (Object.keys(overrideStyle).length !== 0) {
    return Object.assign(style, overrideStyle);
  }

  return style;
}

class Badge extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    style: PropTypes.instanceOf(Object),
    inverted: PropTypes.bool,
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
