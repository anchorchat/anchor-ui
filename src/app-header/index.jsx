import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import Radium from 'radium';
import getStyles from './get-styles';

/** Your app's header */
function AppHeader(
  {
    text,
    icon,
    rightButton,
    style,
    iconStyle,
    textStyle,
    rightButtonStyle,
    leftButton,
    leftButtonStyle
  },
  { color }
) {
  return (
    <header style={getStyles.root(color, style, leftButton, rightButton)}>
      {
        leftButton
        ? <div style={getStyles.leftButton(leftButtonStyle)}>{leftButton}</div>
        : null
      }
      {icon ? <div style={getStyles.icon(iconStyle)}>{icon}</div> : null}
      {text ? <h1 style={getStyles.text(textStyle)}>{text}</h1> : null}
      {
        rightButton
        ? <div style={getStyles.rightButton(rightButtonStyle)}>{rightButton}</div>
        : null
      }
    </header>
  );
}

AppHeader.displayName = 'AppHeader';

AppHeader.propTypes = {
  /** Title text (your app's name) */
  text: PropTypes.node,
  /** Icon (your app's icon) */
  icon: PropTypes.node,
  /** Right-hand side placed button */
  rightButton: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the text element */
  textStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the right button */
  rightButtonStyle: PropTypes.instanceOf(Object),
  /** Left-hand side placed button */
  leftButton: PropTypes.node,
  /** Override the styles of the left button */
  leftButtonStyle: PropTypes.instanceOf(Object),
};

AppHeader.defaultProps = {
  text: null,
  style: {},
  textStyle: {},
  iconStyle: {},
  rightButtonStyle: {},
  icon: null,
  rightButton: null,
  leftButton: null,
  leftButtonStyle: {}
};

AppHeader.contextTypes = {
  color: PropTypes.string
};

export default pure(Radium(AppHeader));
