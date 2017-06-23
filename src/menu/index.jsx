import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import EventListener from 'react-event-listener';
import getStyles from './get-styles';
import Overlay from '../overlay';
import themeable from '../themeable';

/** Menu that slides in from the left */
class Menu extends Component {
  handleKeyUp = (event) => {
    const { closeMenu } = this.props;

    if (event.which === 27) {
      closeMenu(event);
    }
  }

  renderNav = () => {
    const {
      children,
      open,
      header,
      headerIcon,
      closeMenu,
      style,
      iconStyle,
      headerStyle,
      color,
      ...custom
    } = this.props;

    const menuItems = React.Children.map(children, child => (
      cloneElement(child, { closeMenu })
    ));

    let rootStyle = getStyles.root(open, style);

    if (!closeMenu) {
      rootStyle = getStyles.sidebar(style);
    }

    return (
      <nav style={rootStyle} {...custom}>
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

  render() {
    const {
      open,
      closeMenu
    } = this.props;

    if (!closeMenu) {
      return this.renderNav();
    }

    return (
      <section style={getStyles.container()}>
        <Overlay style={getStyles.overlay(open)} onClick={closeMenu} />
        {this.renderNav()}
        {
          open
          ? <EventListener target="window" onKeyUp={this.handleKeyUp} />
          : null
        }
      </section>
    );
  }
}

Menu.displayName = 'Menu';

Menu.propTypes = {
  /** The Menu's content (MenuItem) */
  children: PropTypes.node.isRequired,
  /** Menu open */
  open: PropTypes.bool,
  /**
   * Callback fired when Menu's overlay or MenuItems are clicked
   *
   * function(event: object) => void
   */
  closeMenu: PropTypes.func,
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
  closeMenu: null,
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
