import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import PopOver from '../pop-over';
import Button from '../button';
import styles from '../style/icon-menu';
import combineStyles from '../internal/combine-styles';
import getPopOverPosition from '../internal/get-pop-over-position';

/** Menu with Icon and IconMenu */
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
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    header: null,
    style: {},
    open: false,
    headerStyle: {},
    secondaryMenuItems: null,
    dividerText: null
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

  closeMenu() {
    this.setState({
      open: false,
      positioned: false
    });
  }

  applyCloseMenuToChildren(children) {
    return React.Children.map(
      children, child => React.cloneElement(child, { closeMenu: this.closeMenu })
    );
  }

  render() {
    const {
      children, secondaryMenuItems, header, icon, headerStyle, style, dividerText
    } = this.props;
    const { open, position } = this.state;

    const menuItemsWithProps = this.applyCloseMenuToChildren(children);
    let secondaryMenuItemsWithProps = null;

    if (secondaryMenuItems) {
      secondaryMenuItemsWithProps = this.applyCloseMenuToChildren(secondaryMenuItems);
    }

    return (
      <div style={combineStyles(styles.iconMenu, style)}>
        {open ? <div style={styles.clickAway} onClick={this.closeMenu} /> : null}
        <div ref={button => (this.button = button)}>
          <Button iconButton onClick={this.openMenu}>{icon}</Button>
        </div>
        <PopOver
          header={header}
          headerStyle={headerStyle}
          open={open}
          popOverRef={popOver => (this.popOver = popOver)}
          position={position}
          secondaryMenuItems={secondaryMenuItemsWithProps}
          dividerText={dividerText}
        >
          {menuItemsWithProps}
        </PopOver>
      </div>
    );
  }
}

export default pure(Radium(IconMenu));
