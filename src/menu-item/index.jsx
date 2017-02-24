import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/menu-item';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function getStyle(themeColor, icon, active, overrideStyle) {
  let style = styles.menuItem;
  const color = themeColor || colors.theme;

  if (icon) {
    style = combineStyles(style, { paddingLeft: '40px' });
  }

  if (active) {
    style = combineStyles(style, { color });
  }

  return combineStyles(style, overrideStyle);
}

/** General purpose menu item */
class MenuItem extends Component {
  static displayName = 'MenuItem';

  static propTypes = {
    /** The item's icon */
    icon: PropTypes.node,
    /** The item's label */
    text: PropTypes.string.isRequired,
    /** MenuItem active */
    active: PropTypes.bool,
    /** MenuItem onClick function */
    onClick: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the input element */
    textStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the icon element */
    iconStyle: PropTypes.instanceOf(Object),
    /** Closes IconMenu if MenuItem is child */
    closeMenu: PropTypes.func
  };

  static defaultProps = {
    icon: null,
    active: false,
    style: {},
    textStyle: {},
    iconStyle: {},
    closeMenu: null
  };

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { closeMenu, onClick } = this.props;

    if (closeMenu) {
      closeMenu();
    }

    onClick();
  }

  render() {
    const { icon, text, style, textStyle, iconStyle, active } = this.props;
    const { color } = this.context;

    return (
      <section style={getStyle(color, icon, active, style)} onClick={this.handleClick}>
        {icon ? <div style={combineStyles(styles.icon, iconStyle)}>{icon}</div> : null}
        <p style={combineStyles(styles.text, textStyle)}>
          {text}
        </p>
      </section>
    );
  }
}

export default pure(Radium(MenuItem));
