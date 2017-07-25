import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import en from 'date-fns/locale/en';
import IconMenu from '../icon-menu';
import IconChevronDown from '../icons/icon-chevron-down';
import getStyles from './get-styles';
import TextMessage from './text-message';
import ImageMessage from './image-message';
import StickerMessage from './sticker-message';
import TypingMessage from './typing-message';
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
      type: PropTypes.oneOf(['text', 'image', 'sticker', 'typing'])
    }).isRequired,
    /**
     * The format of displaying message.createdAt
     *
     * https://date-fns.org/docs/format
     */
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
    /**
     * Callback fired when 'expand' MenuItem is clicked
     *
     * function(event: object) => void
     */
    expand: PropTypes.func,
    /** Text to show in expand menu item */
    expandText: PropTypes.node,
    /** Icon to show in expand menu item */
    expandIcon: PropTypes.node,
    /** Custom menu item, should be a MenuItem component.
     *  This component should handle the image expand.
     *  None of the other 'expand' props are passed to this component.
     */
    expandMenuItem: PropTypes.node,
    /** Text to display for edited banner */
    edited: PropTypes.node,
    /**
     * Internationalization, defaults to English
     *
     * https://date-fns.org/docs/I18n
     */
    locale: PropTypes.instanceOf(Object),
    /** Show a separator above the message */
    separator: PropTypes.node,
    /**
     * Mention users, should be an array of usernames.
     * 'mentions' is an array of usernames that are mentioned in a certain message.
     *
     * Text matching '@username' will be highlighted
     */
    mentions: PropTypes.arrayOf(String),
    /**
     * Callback fired when a command is clicked
     *
     * function(event: object, username: string) => void
     */
    onMentionClick: PropTypes.func,
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
    locale: en,
    separator: null,
    mentions: [],
    onMentionClick: null,
    expandMenuItem: null
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
      expandMenuItem
    } = this.props;

    if (!expand || (!menuItems && !collapsed)) {
      return null;
    }

    const menuItem = <MenuItem icon={expandIcon} text={expandText} onClick={expand} />;

    if (!menuItems && collapsed) {
      return (
        <IconMenu icon={<IconChevronDown />}>
          {expandMenuItem || menuItem}
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
        {expandMenuItem || menuItem}
      </IconMenu>
    );
  }

  render() {
    const {
      avatar,
      message,
      timeFormat,
      myMessage,
      style,
      messageHeaderStyle,
      messageBodyStyle,
      messageTimeStyle,
      compact,
      fontSize,
      emoji,
      enableLinks,
      menuItems,
      enableLightbox,
      collapsed,
      expand,
      expandText,
      expandIcon,
      collapsedText,
      edited,
      locale,
      mentions,
      onMentionClick,
      color,
      separator,
      expandMenuItem,
      ...custom
    } = this.props;

    let messageElement = <TextMessage color={color} {...this.props} />;

    if (message.type === 'image') {
      messageElement = <ImageMessage color={color} {...this.props} />;
    }

    if (message.type === 'sticker') {
      messageElement = <StickerMessage color={color} {...this.props} />;
    }

    if (message.type === 'typing') {
      messageElement = <TypingMessage color={color} {...this.props} />;
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
