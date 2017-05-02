import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import colors from '../settings/colors';
import IconSuccess from '../icons/icon-success';
import getStyles from './get-styles';

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
    const {
      icon,
      text,
      style,
      textStyle,
      iconStyle,
      active,
      closeMenu, // eslint-disable-line no-unused-vars
      onClick, // eslint-disable-line no-unused-vars
      ...custom
    } = this.props;
    const { color } = this.context;

    return (
      <section
        style={getStyles.root(color, icon, active, style)}
        onClick={this.handleClick}
        {...custom}
      >
        {icon ? <div style={getStyles.icon(iconStyle)}>{icon}</div> : null}
        <p style={getStyles.text(textStyle)}>
          {text}
        </p>
        {
          active
          ? <div style={getStyles.activeIcon(iconStyle)}>
            <IconSuccess color={color || colors.theme} />
          </div>
          : null
        }
      </section>
    );
  }
}

export default pure(Radium(MenuItem));
