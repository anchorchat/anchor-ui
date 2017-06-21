import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import getStyles from './get-styles';
import Overlay from '../overlay';
import themeable from '../themeable';

/** Menu that slides in from the left */
const Menu = ({
  children,
  open,
  header,
  headerIcon,
  toggleMenu,
  style,
  iconStyle,
  headerStyle,
  color,
  ...custom
}) => {
  const menuItems = React.Children.map(children, child => (
    cloneElement(child, { closeMenu: toggleMenu })
  ));

  if (!toggleMenu) {
    return (
      <nav style={getStyles.sidebar(style)} {...custom}>
        {
          headerIcon
          ? <div style={getStyles.icon(iconStyle)}>{React.cloneElement(headerIcon, { color })}</div>
          : null
        }
        {header ? <h1 style={getStyles.header(color, headerIcon, headerStyle)}>{header}</h1> : null}
        {menuItems}
      </nav>
    );
  }

  return (
    <section style={getStyles.container()}>
      <Overlay style={getStyles.overlay(open)} onClick={toggleMenu} />
      <nav style={getStyles.root(open, style)} {...custom}>
        {
          headerIcon
          ? <div style={getStyles.icon(iconStyle)}>{React.cloneElement(headerIcon, { color })}</div>
          : null
        }
        {header ? <h1 style={getStyles.header(color, headerIcon, headerStyle)}>{header}</h1> : null}
        {menuItems}
      </nav>
    </section>
  );
};

Menu.displayName = 'Menu';

Menu.propTypes = {
  /** The Menu's content (MenuItem) */
  children: PropTypes.node.isRequired,
  /** Menu open */
  open: PropTypes.bool,
  /** Toggle the Menu's visibility, Menu will render as a sidebar if this prop is not supplied. */
  toggleMenu: PropTypes.func,
  /** The Menu's header */
  header: PropTypes.node,
  /** The header's icon */
  headerIcon: PropTypes.node,
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the root element */
  headerStyle: PropTypes.instanceOf(Object),
  color: PropTypes.string.isRequired
};

Menu.defaultProps = {
  open: false,
  toggleMenu: null,
  header: null,
  style: {},
  headerStyle: {},
  headerIcon: null,
  iconStyle: {}
};

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Menu);
