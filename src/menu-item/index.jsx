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
    /** MenuItem onClick function */
    onClick: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the input element */
    textStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the icon element */
    iconStyle: PropTypes.instanceOf(Object),
    /** Closes IconMenu if MenuItem is child */
    closeMenu: PropTypes.func,
    /** Right-hand side placed button */
    rightButton: PropTypes.node,
    color: PropTypes.string.isRequired
  };

  static defaultProps = {
    icon: null,
    active: false,
    style: {},
    textStyle: {},
    iconStyle: {},
    closeMenu: null,
    rightButton: null
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
      rightButton,
      color,
      ...custom
    } = this.props;

    return (
      <section
        style={getStyles.root(color, icon, active, rightButton, style)}
        onClick={this.handleClick}
        {...custom}
      >
        {icon ? <div style={getStyles.icon(iconStyle)}>{icon}</div> : null}
        <p style={getStyles.text(textStyle)}>
          {text}
        </p>
        {rightButton ? <div style={getStyles.rightButton(iconStyle)}>{rightButton}</div> : null}
      </section>
    );
  }
}

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(MenuItem);
