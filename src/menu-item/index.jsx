import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import getStyles from './get-styles';
import themeable from '../themeable';

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
    /**
     * Callback fired when MenuItem is clicked
     *
     * function(event: object) => void
     */
    onClick: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the input element */
    textStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the icon element */
    iconStyle: PropTypes.instanceOf(Object),
    /**
     * Callback fired when the MenuItem closes a Menu/IconMenu
     *
     * function(event: object) => void
     */
    closeMenu: PropTypes.func,
    /** Right-hand side placed button */
    rightButton: PropTypes.node,
    /** Override the styles of the right button element */
    buttonStyle: PropTypes.instanceOf(Object),
    /** Override style applied when the MenuItem is active */
    activeStyle: PropTypes.instanceOf(Object),
    color: PropTypes.string.isRequired
  };

  static defaultProps = {
    icon: null,
    active: false,
    style: {},
    textStyle: {},
    iconStyle: {},
    buttonStyle: {},
    closeMenu: null,
    rightButton: null,
    activeStyle: {}
  };

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { closeMenu, onClick } = this.props;

    if (closeMenu) {
      closeMenu(event);
    }

    onClick(event);
  }

  renderIcon() {
    const { icon, active, color } = this.props;

    if (active) {
      return React.cloneElement(icon, { color });
    }

    return icon;
  }

  render() {
    const {
      icon,
      text,
      style,
      textStyle,
      iconStyle,
      active,
      closeMenu,
      onClick,
      rightButton,
      buttonStyle,
      color,
      activeStyle,
      ...custom
    } = this.props;

    return (
      <section
        style={getStyles.root(color, icon, active, rightButton, style, activeStyle)}
        onClick={this.handleClick}
        {...custom}
      >
        {icon ? <div style={getStyles.icon(iconStyle)}>{this.renderIcon()}</div> : null}
        <p style={getStyles.text(textStyle)}>
          {text}
        </p>
        {rightButton ? <div style={getStyles.rightButton(buttonStyle)}>{rightButton}</div> : null}
      </section>
    );
  }
}

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(MenuItem);
