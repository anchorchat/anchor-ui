import React, { Component, PropTypes } from 'react';
import {
  Button as ReactNativeButton
} from 'react-native';
import shallowEqual from 'recompose/shallowEqual';
import styles from '../style/buttons';
import colors from '../settings/colors';
import darken from '../internal/darken';
import combineStyles from '../internal/combine-styles';

function getStyle(themeColor, inverted, iconButton, overrideStyle) {
  const color = themeColor || colors.theme;

  let style = combineStyles(
    styles.button,
    {
      backgroundColor: color,
      ':active': { backgroundColor: darken(color, 0.25) }
    }
  );
  const invertedStyle = combineStyles(styles.inverted, { color });

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
      Uranium.getState(this.state, 'button', ':active') !== Uranium.getState(nextState, 'button', ':active')
    );
  }

  render() {
    const { children, onClick, iconButton, inverted, style } = this.props;
    const { color } = this.context;

    return (
      <ReactNativeButton key="button" onClick={onClick} style={getStyle(color, inverted, iconButton, style)}>
        {children}
      </ReactNativeButton>
    );
  }
}

export default Button;
