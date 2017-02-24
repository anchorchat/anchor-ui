import React, { Component, PropTypes } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import styles from '../style/buttons';
import colors from '../settings/colors';
import darken from '../internal/darken';
import combineStyles from '../internal/combine-styles';

function getStyle(themeColor, inverted, iconButton, overrideStyle) {
  const color = themeColor || colors.theme;

  let style = {
    ...styles.button,
    backgroundColor: color,
    ':hover': { backgroundColor: darken(color, 0.15) },
    ':active': { backgroundColor: darken(color, 0.25) }
  };
  const invertedStyle = {
    ...styles.inverted,
    color,
    backgroundColor: colors.white,
    ':hover': { backgroundColor: darken(colors.white, 0.15) },
    ':active': { backgroundColor: darken(colors.white, 0.25) }
  };

  if (inverted) {
    return combineStyles(combineStyles(style, invertedStyle), overrideStyle);
  }

  if (iconButton) {
    style = styles.iconButton;
  }

  return combineStyles(style, overrideStyle);
}

/** General purpose button with two types */
class Button extends Component {
  static displayName = 'Button';
  static propTypes = {
    /** Content of the button */
    children: PropTypes.node.isRequired,
    /** Button onClick function */
    onClick: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Switches between 'icon-button' and 'normal-button' */
    iconButton: PropTypes.bool,
    /** Inverts color */
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
      <button key="button" onClick={onClick} style={getStyle(color, inverted, iconButton, style)}>
        {children}
      </button>
    );
  }
}

export default Radium(Button);
