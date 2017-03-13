import React, { Component, PropTypes } from 'react';
import {
  View,
  Text
} from 'react-native';
import Uranium from 'uranium';
import pure from 'recompose/pure';
import styles from '../style/menu-item';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';
import IconSuccess from '../icons/icon-success';

function getStyle(themeColor, icon, active, overrideStyle) {
  let style = styles.menuItem;
  const color = themeColor || colors.theme;

  if (icon) {
    style = combineStyles(style, { paddingLeft: '40px' });
  }

  if (active) {
    style = combineStyles(style, { color, paddingRight: '40px' });
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
    text: PropTypes.node.isRequired,
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
      <View style={getStyle(color, icon, active, style)} onClick={this.handleClick}>
        {icon ? <View style={combineStyles(styles.icon, iconStyle)}>{icon}</View> : null}
        <Text style={combineStyles(styles.text, textStyle)}>
          {text}
        </Text>
        {
          active
          ? <View style={styles.activeIcon}><IconSuccess color={color || colors.theme} /></View>
          : null
        }
      </View>
    );
  }
}

export default pure(Uranium(MenuItem));
