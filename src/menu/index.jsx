import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import EventListener from 'react-event-listener';
import getStyles from './get-styles';
import Overlay from '../overlay';
import themeable from '../themeable';

const displayName = 'Menu';

const propTypes = {
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
  /** The Menu's footer */
  footer: PropTypes.node,
  /** The Menu's footer */
  position: PropTypes.oneOf(['left', 'right']),
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the footer element */
  footerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the footer element */
  contentContainerStyle: PropTypes.instanceOf(Object),
  color: PropTypes.string.isRequired
};

const defaultProps = {
  open: false,
  closeMenu: null,
  header: null,
  footer: null,
  position: 'left',
  style: {},
  headerStyle: {},
  headerIcon: null,
  iconStyle: {},
  footerStyle: {},
  contentContainerStyle: {}
};

/** Menu that slides in from the left/right */
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
      footer,
      position,
      headerIcon,
      closeMenu,
      style,
      iconStyle,
      headerStyle,
      footerStyle,
      contentContainerStyle,
      color,
      ...custom
    } = this.props;

    const menuItems = React.Children.map(children, child => (
      cloneElement(child, { closeMenu })
    ));

    let rootStyle = getStyles.root(open, position, style);

    if (!closeMenu) {
      rootStyle = getStyles.sidebar(style);
    }

    return (
      <nav style={rootStyle} {...custom}>
        {
          headerIcon
          ? (
            <div style={getStyles.icon(iconStyle)}>
              {React.cloneElement(headerIcon, { color })}
            </div>
          )
          : null
        }
        {
          header
          ? <h1 style={getStyles.header(color, headerIcon, headerStyle)}>{header}</h1>
          : null
        }
        <section style={getStyles.contentContainer(header, footer, contentContainerStyle)}>
          {menuItems}
          {footer ? <span style={getStyles.footer(!closeMenu, footerStyle)}>{footer}</span> : null}
        </section>
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

Menu.displayName = displayName;
Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Menu);
