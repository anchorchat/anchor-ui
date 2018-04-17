import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import noop from 'lodash/noop';
import PopOver from '../pop-over';
import Button from '../button';
import getStyles from './get-styles';
import getPopOverPosition from '../internal/get-pop-over-position';

const displayName = 'IconMenu';

const propTypes = {
  /** Icon to toggle the menu with */
  icon: PropTypes.node.isRequired,
  /** Content of the IconMenu (MenuItems) */
  children: PropTypes.node.isRequired,
  /** Secondary set of MenuItems */
  secondaryMenuItems: PropTypes.node,
  /** Text to divide the menu items */
  dividerText: PropTypes.node,
  /** Optional header text */
  header: PropTypes.node,
  /** Override the styles of the header element */
  headerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the content container */
  contentStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Callback fired when the IconMenu closes
   *
   * function(event: object) => void
   */
  onMenuClose: PropTypes.func,
  /** Override the styles of the divider element */
  dividerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Callback fired when the IconMenu's header is clicked
   *
   * function(event: object) => void
   */
  onHeaderClick: PropTypes.func,
  /** Override the styles of the Button component */
  buttonStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  contentStyle: {},
  dividerStyle: {},
  secondaryMenuItems: null,
  dividerText: null,
  onMenuClose: noop,
  onHeaderClick: noop,
  buttonStyle: {}
};

/** Open a menu from an Icon, give options related to the icon */
class IconMenu extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      positioned: false
    };

    this.button = createRef();
    this.popOver = createRef();
  }

  componentDidUpdate() {
    const { open, positioned } = this.state;

    if (open && !positioned) {
      this.positionPopOver();
    }
  }

  positionPopOver = () => {
    const button = this.button.current.getBoundingClientRect();
    const popOver = this.popOver.current.getBoundingClientRect();

    this.setState({
      positioned: true,
      position: getPopOverPosition(button, popOver)
    });
  }

  openMenu = () => {
    this.setState({
      open: true
    });
  }

  closeMenu = (event) => {
    const { onMenuClose } = this.props;
    const { open } = this.state;

    if (!open) {
      return false;
    }

    this.setState({
      open: false,
      positioned: false
    });

    return onMenuClose(event);
  }

  handleClickOutside = event => this.closeMenu(event)

  applyCloseMenuToChildren = children => (
    React.Children.map(
      children,
      child => (
        React.cloneElement(child, { closeMenu: this.closeMenu })
      )
    )
  )

  handleKeyUp = (event) => {
    if (event.which === 27) {
      this.closeMenu();
    }
  }

  handleHeaderClick = (event) => {
    const { onHeaderClick } = this.props;

    onHeaderClick(event);
    this.closeMenu(event);
  }

  render() {
    const {
      children,
      secondaryMenuItems,
      header,
      icon,
      headerStyle,
      style,
      contentStyle,
      dividerText,
      onMenuClose,
      eventTypes, // eslint-disable-line react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line react/prop-types
      preventDefault, // eslint-disable-line react/prop-types
      stopPropagation, // eslint-disable-line react/prop-types
      disableOnClickOutside, // eslint-disable-line react/prop-types
      enableOnClickOutside, // eslint-disable-line react/prop-types
      dividerStyle,
      onHeaderClick,
      buttonStyle,
      ...custom
    } = this.props;
    const { open, position } = this.state;

    const menuItemsWithProps = this.applyCloseMenuToChildren(children);
    let secondaryMenuItemsWithProps = null;

    if (secondaryMenuItems) {
      secondaryMenuItemsWithProps = this.applyCloseMenuToChildren(secondaryMenuItems);
    }

    return (
      <div style={getStyles.root(style)} {...custom}>
        {
          open
          ? <EventListener
            target="window"
            onResize={this.closeMenu}
            onKeyUp={this.handleKeyUp}
          />
          : null
        }
        <div ref={this.button}>
          <Button
            style={buttonStyle}
            iconButton
            onClick={!open ? this.openMenu : this.closeMenu}
          >
            {icon}
          </Button>
        </div>
        <PopOver
          style={contentStyle}
          header={header}
          headerStyle={headerStyle}
          open={open}
          popOverRef={this.popOver}
          position={position}
          secondaryMenuItems={secondaryMenuItemsWithProps}
          dividerText={dividerText}
          dividerStyle={dividerStyle}
          onHeaderClick={this.handleHeaderClick}
        >
          {menuItemsWithProps}
        </PopOver>
      </div>
    );
  }
}

IconMenu.displayName = displayName;
IconMenu.propTypes = propTypes;
IconMenu.defaultProps = defaultProps;

export default IconMenu;
