import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import EventListener from 'react-event-listener';
import Portal from 'react-portal';
import PopOver from '../pop-over';
import Button from '../button';
import getStyles from './get-styles';
import getPopOverPosition from '../internal/get-pop-over-position';

/** Open a menu from an Icon, give options related to the icon */
class IconMenu extends Component {
  static displayName = 'IconMenu'

  static propTypes = {
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
    headerStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the content container */
    contentStyle: PropTypes.instanceOf(Object),
    /**
     * Callback fired when the IconMenu closes
     *
     * function(event: object) => void
     */
    onMenuClose: PropTypes.func
  }

  static defaultProps = {
    header: null,
    style: {},
    headerStyle: {},
    contentStyle: {},
    secondaryMenuItems: null,
    dividerText: null,
    onMenuClose: () => {}
  }

  constructor() {
    super();

    this.state = {
      open: false,
      positioned: false
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.positionPopOver = this.positionPopOver.bind(this);
  }

  componentDidUpdate() {
    const { open, positioned } = this.state;

    if (open && !positioned) {
      this.positionPopOver();
    }
  }

  positionPopOver() {
    const button = this.button.getBoundingClientRect();
    const popOver = this.popOver.getBoundingClientRect();

    this.setState({
      positioned: true,
      position: getPopOverPosition(button, popOver)
    });
  }

  openMenu() {
    this.setState({
      open: true
    });
  }

  closeMenu(event) {
    this.portal.closePortal();
    this.handleClose(event);
  }

  handleClose = (event) => {
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

  applyCloseMenuToChildren(children) {
    return React.Children.map(
      children, child => React.cloneElement(child, { closeMenu: this.closeMenu })
    );
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
      ...custom
    } = this.props;
    const { open, position } = this.state;

    const menuItemsWithProps = this.applyCloseMenuToChildren(children);
    let secondaryMenuItemsWithProps = null;

    if (secondaryMenuItems) {
      secondaryMenuItemsWithProps = this.applyCloseMenuToChildren(secondaryMenuItems);
    }

    const portalButton = (
      <div ref={button => (this.button = button)}>
        <Button iconButton onClick={!open ? this.openMenu : this.closeMenu}>{icon}</Button>
      </div>
    );

    return (
      <div style={getStyles.root(style)} {...custom}>
        {
          open
          ? <EventListener
            target="window"
            onResize={this.closeMenu}
          />
          : null
        }
        {
          open
          ? <div ref={button => (this.button = button)}>
            <Button iconButton>{icon}</Button>
          </div>
          : null
        }
        <Portal
          ref={node => (this.portal = node)}
          openByClickOn={!open ? portalButton : null}
          closeOnEsc
          closeOnOutsideClick
          onClose={this.handleClose}
        >
          <PopOver
            style={contentStyle}
            header={header}
            headerStyle={headerStyle}
            open
            popOverRef={popOver => (this.popOver = popOver)}
            position={position}
            secondaryMenuItems={secondaryMenuItemsWithProps}
            dividerText={dividerText}
          >
            {menuItemsWithProps}
          </PopOver>
        </Portal>
      </div>
    );
  }
}

export default Radium(IconMenu);
