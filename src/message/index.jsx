import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import IconMenu from '../icon-menu';
import IconChevronDown from '../icons/icon-chevron-down';
import getStyles from './get-styles';
import TextMessage from './text-message';
import ImageMessage from './image-message';
import StickerMessage from './sticker-message';
import MenuItem from '../menu-item';
import themeable from '../themeable';
import styles from './styles';

/** Messages with optional styling for the current user's message,
different font sizes and message styles */
class Message extends Component {
  static displayName = 'Message'

  static propTypes = {
    /** Path to the user's profile image will only be rendered if provided */
    avatar: PropTypes.string,
    /** Message object containing : body, createdAt, username */
    message: PropTypes.shape({
      /** The message's body text */
      body: PropTypes.node.isRequired,
      /** Time when the message was created */
      createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
      ]).isRequired,
      /** The sender's username */
      username: PropTypes.string.isRequired,
      /** The message's type */
      type: PropTypes.oneOf(['text', 'image', 'sticker'])
    }).isRequired,
    /** The format of displaying message.createdAt */
    timeFormat: PropTypes.string,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    messageHeaderStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the body element */
    messageBodyStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the time element */
    messageTimeStyle: PropTypes.instanceOf(Object),
    /** The message size. One of the following: ["small", "medium", "large"] */
    fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Flag used to change message styles. True if the message was sent by the current user */
    myMessage: PropTypes.bool,
    /** Enable emojione for messages */
    emoji: PropTypes.bool,
    /** Enables links in messages */
    enableLinks: PropTypes.bool,
    /** Enables compact messages */
    compact: PropTypes.bool,
    /** Enables PopOver with MenuItems */
    menuItems: PropTypes.node,
    /** Enables Lighbox for image messages */
    enableLightbox: PropTypes.bool,
    /** Collapse an image message */
    collapsed: PropTypes.bool,
    /** Text to display for collapsed image messages */
    collapsedText: PropTypes.node,
    /** Expand a collapsed image message */
    expand: PropTypes.func,
    /** Text to show in expand menu item */
    expandText: PropTypes.node,
    /** Icon to show in expand menu item */
    expandIcon: PropTypes.node,
    /** Text to display for edited banner */
    edited: PropTypes.node,
    /** Show a separator above the message */
    separator: PropTypes.node,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    avatar: '',
    style: {},
    timeFormat: 'HH:mm',
    messageHeaderStyle: {},
    messageBodyStyle: {},
    messageTimeStyle: {},
    fontSize: 'small',
    myMessage: false,
    emoji: false,
    enableLinks: false,
    compact: false,
    menuItems: null,
    enableLightbox: false,
    collapsed: false,
    expand: null,
    expandText: 'Expand image',
    expandIcon: null,
    collapsedText: 'This image has been collapsed, click the button to expand it.',
    edited: null,
    separator: null
  }

  constructor() {
    super();

    this.renderIconMenu = this.renderIconMenu.bind(this);
    this.renderImageIconMenu = this.renderImageIconMenu.bind(this);
  }

  renderIconMenu() {
    const { menuItems } = this.props;

    if (!menuItems) {
      return null;
    }

    return (
      <IconMenu icon={<IconChevronDown />}>
        {menuItems}
      </IconMenu>
    );
  }

  renderImageIconMenu() {
    const {
      collapsed,
      expand,
      expandIcon,
      expandText,
      menuItems,
    } = this.props;

    if (!expand || (!menuItems && !collapsed)) {
      return null;
    }

    if (!menuItems && collapsed) {
      return (
        <IconMenu icon={<IconChevronDown />}>
          <MenuItem icon={expandIcon} text={expandText} onClick={expand} />
        </IconMenu>
      );
    }

    if (menuItems && !collapsed) {
      return (
        <IconMenu icon={<IconChevronDown />}>
          {menuItems}
        </IconMenu>
      );
    }

    return (
      <IconMenu icon={<IconChevronDown />}>
        {menuItems}
        <MenuItem icon={expandIcon} text={expandText} onClick={expand} />
      </IconMenu>
    );
  }

  render() {
    const {
      avatar, // eslint-disable-line no-unused-vars
      message,
      timeFormat, // eslint-disable-line no-unused-vars
      myMessage,
      style, // eslint-disable-line no-unused-vars
      messageHeaderStyle, // eslint-disable-line no-unused-vars
      messageBodyStyle, // eslint-disable-line no-unused-vars
      messageTimeStyle, // eslint-disable-line no-unused-vars
      compact,
      fontSize, // eslint-disable-line no-unused-vars
      emoji, // eslint-disable-line no-unused-vars
      enableLinks, // eslint-disable-line no-unused-vars
      menuItems, // eslint-disable-line no-unused-vars
      enableLightbox, // eslint-disable-line no-unused-vars
      collapsed, // eslint-disable-line no-unused-vars
      expand, // eslint-disable-line no-unused-vars
      expandText, // eslint-disable-line no-unused-vars
      expandIcon, // eslint-disable-line no-unused-vars
      collapsedText, // eslint-disable-line no-unused-vars
      edited, // eslint-disable-line no-unused-vars
      color,
      separator,
      ...custom
    } = this.props;

    let messageElement = <TextMessage color={color} {...this.props} />;

    if (message.type === 'image') {
      messageElement = <ImageMessage color={color} {...this.props} />;
    }

    if (message.type === 'sticker') {
      messageElement = <StickerMessage color={color} {...this.props} />;
    }

    return (
      <div style={styles.root}>
        {separator}
        <section style={getStyles.container(myMessage, compact)} {...custom}>
          {messageElement}
          {message.type === 'image' ? this.renderImageIconMenu() : this.renderIconMenu()}
        </section>
      </div>
    );
  }
}

const enhance = compose(
  themeable(),
  Radium,
  pure
);

export default enhance(Message);
