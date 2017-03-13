import React, { Component, PropTypes } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import styles from '../style/app-header';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

function getStyle(themeColor, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = combineStyles(styles.header, { background: color });

  return combineStyles(style, overrideStyle);
}

/** Your app's header */
class AppHeader extends Component {
  static displayName = 'AppHeader';

  static propTypes = {
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
    /** Override the styles of the button element */
    buttonStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    text: null,
    style: {},
    textStyle: {},
    iconStyle: {},
    buttonStyle: {},
    icon: null,
    rightButton: null
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
    const { text, icon, rightButton, style, iconStyle, textStyle, buttonStyle } = this.props;
    const { color } = this.context;

    return (
      <header style={getStyle(color, style)}>
        {icon ? <div style={combineStyles(styles.icon, iconStyle)}>{icon}</div> : null}
        {text ? <h1 style={combineStyles(styles.text, textStyle)}>{text}</h1> : null}
        {
          rightButton
          ? <div style={combineStyles(styles.button, buttonStyle)}>{rightButton}</div>
          : null
        }
      </header>
    );
  }
}

export default Radium(AppHeader);
