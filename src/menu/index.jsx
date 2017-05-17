import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';
import Overlay from '../overlay';

/** Menu that slides in from the left */
function Menu({ children, open, header, toggleMenu, style, headerStyle, ...custom }) {
  const menuItems = children.map((menuItem, index) => (
    cloneElement(
      menuItem,
      {
        key: index,
        closeMenu: toggleMenu
      }
    )
  ));

  return (
    <section style={getStyles.container()}>
      <Overlay style={getStyles.overlay(open)} onClick={toggleMenu} />
      <nav style={getStyles.root(open, style)} {...custom}>
        {header ? <h1 style={getStyles.header(headerStyle)}>{header}</h1> : null}
        {menuItems}
      </nav>
    </section>
  );
}

Menu.displayName = 'Menu';

Menu.propTypes = {
  /** The Menu's content (MenuItem) */
  children: PropTypes.node.isRequired,
  /** Menu open */
  open: PropTypes.bool,
  /** Toggle the Menu's visibility */
  toggleMenu: PropTypes.func.isRequired,
  /** The Menu's header */
  header: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the root element */
  headerStyle: PropTypes.instanceOf(Object)
};

Menu.defaultProps = {
  open: false,
  header: null,
  style: {},
  headerStyle: {}
};

export default pure(Radium(Menu));
