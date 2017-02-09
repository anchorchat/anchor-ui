import React, { Component, PropTypes } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import styles from '../style/buttons';
import colors from '../style/colors';
import darken from '../internal/darken';

function getStyle(themeColor, inverted, iconButton, overrideStyle) {
  const color = themeColor || colors.theme;

  let style = {
    ...styles.button,
    backgroundColor: color,
    ':hover': { backgroundColor: darken(themeColor, 0.15) },
    ':active': { backgroundColor: darken(themeColor, 0.25) }
  };
  const invertedStyle = {
    ...styles.inverted,
    color,
    backgroundColor: colors.white,
    ':hover': { backgroundColor: darken(colors.white, 0.15) },
    ':active': { backgroundColor: darken(colors.white, 0.25) }
  };

  if (inverted) {
    return Object.assign(style, invertedStyle);
  }

  if (iconButton) {
    style = styles.iconButton;
  }

  if (Object.keys(overrideStyle).length !== 0) {
    return Object.assign(style, overrideStyle);
  }

  return style;
}

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.instanceOf(Object),
    iconButton: PropTypes.bool,
    inverted: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    iconButton: false,
    inverted: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext) ||
      Radium.getState(this.state, 'button', ':hover') !== Radium.getState(nextState, 'button', ':hover') ||
      Radium.getState(this.state, 'button', ':active') !== Radium.getState(nextState, 'button', ':active')
    );
  }

  render() {
    const { children, onClick, iconButton, inverted, style } = this.props;
    const { color } = this.context;

    return (
      <button onClick={onClick} style={getStyle(color, inverted, iconButton, style)}>
        {children}
      </button>
    );
  }
}

export default Radium(Button);
