import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import PopOver from '../pop-over';
import Button from '../button';
import styles from '../style/icon-menu';
import combineStyles from '../internal/combine-styles';

/** Menu with Icon and IconMenu */
class IconMenu extends Component {
  static displayName = 'IconMenu'

  static propTypes = {
    /** Icon to toggle the menu with */
    icon: PropTypes.node.isRequired,
    /** Content of the IconMenu (MenuItems) */
    children: PropTypes.node.isRequired,
    /** Optional header text */
    header: PropTypes.node,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    header: null,
    style: {},
    open: false
  }

  constructor() {
    super();

    this.state = {
      open: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { children, header, icon, style } = this.props;
    const { open } = this.state;

    const childrenWithProps = React.Children.map(
      children, child => React.cloneElement(child, { closeMenu: this.toggleMenu })
    );

    return (
      <div style={combineStyles(styles.iconMenu, style)}>
        {open ? <div style={styles.clickAway} onClick={this.toggleMenu} /> : null}
        <Button iconButton onClick={this.toggleMenu}>{icon}</Button>
        <PopOver header={header} open={open}>
          {childrenWithProps}
        </PopOver>
      </div>
    );
  }
}

export default pure(Radium(IconMenu));
