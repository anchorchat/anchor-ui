import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import emojione from 'emojione';
import escape from 'escape-html';
import shallowEqual from 'recompose/shallowEqual';
import styles from './styles';
import getStyles from './get-styles';
import urlRegex from '../url-regex';
import PopOver from '../pop-over';
import getPopOverPosition from '../internal/get-pop-over-position';
import Lightbox from '../lightbox';
import MessageHeader from './message-header';
import MessageTime from './message-time';

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
    enableLightbox: PropTypes.bool
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
    enableLightbox: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      open: false,
      positioned: false,
      position: {},
      lightbox: false
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.toggleLightbox = this.toggleLightbox.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  componentDidUpdate() {
    const { open, positioned } = this.state;
    const { menuItems } = this.props;

    if (menuItems && open && !positioned) {
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

  createMarkup(text) {
    const { enableLinks } = this.props;

    const escapedText = escape(text);

    let parsedText = escapedText;

    if (enableLinks) {
      const urlSchemeRegex = /^(?:https?:\/\/)/;

      parsedText = escapedText.replace(urlRegex, (url) => {
        if (!urlSchemeRegex.test(url)) {
          // Add default http:// scheme for urls like example.com
          return (`<a href="http://${url}" target="_blank">${url}</a>`);
        }
        return (`<a href="${url}" target="_blank">${url}</a>`);
      });
    }

    return {
      __html: emojione.toImage(parsedText)
    };
  }

  closeMenu() {
    this.setState({
      open: false,
      positioned: false
    });
  }

  toggleLightbox() {
    const { enableLightbox } = this.props;

    if (!enableLightbox) {
      return false;
    }

    return this.setState({
      lightbox: !this.state.lightbox
    });
  }

  renderMessageBody() {
    const { emoji, message, enableLightbox } = this.props;
    let onClick = null;

    if (enableLightbox) {
      onClick = this.toggleLightbox;
    }

    if (message.type === 'image') {
      return <img onClick={onClick} style={styles.messageImage} src={message.body} alt="user-upload" />;
    }

    if (message.type === 'sticker') {
      return <img style={styles.messageSticker} src={message.body} alt="user-upload" />;
    }

    if (emoji) {
      return <span dangerouslySetInnerHTML={this.createMarkup(message.body)} />;
    }

    return message.body;
  }

  renderMenuItems() {
    const { menuItems } = this.props;
    const { open, position } = this.state;

    if (!menuItems) {
      return null;
    }

    const menuItemsWithProps = React.Children.map(
      menuItems, child => React.cloneElement(child, { closeMenu: this.closeMenu })
    );

    return (
      <div>
        {open ? <div style={styles.clickAway} onClick={this.closeMenu} /> : null}
        <PopOver
          open={open}
          popOverRef={popOver => (this.popOver = popOver)}
          position={position}
          onScroll={this.closeMenu}
        >
          {menuItemsWithProps}
        </PopOver>
      </div>
    );
  }

  renderLightbox(message) {
    const { lightbox } = this.state;
    const { enableLightbox } = this.props;

    if (message.type !== 'image' && !enableLightbox) {
      return null;
    }

    return (
      <Lightbox
        open={lightbox}
        image={message.body}
        hideLightbox={this.toggleLightbox}
      />
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
      emoji, // eslint-disable-line no-unused-vars
      enableLinks, // eslint-disable-line no-unused-vars
      menuItems, // eslint-disable-line no-unused-vars
      enableLightbox,
      ...custom
    } = this.props;
    const { color } = this.context;

    return (
      <section style={getStyles.container(myMessage, compact)} {...custom}>
        <div style={getStyles.root(color, myMessage, avatar, compact, style)}>
          <MessageHeader
            avatar={avatar}
            compact={compact}
            myMessage={myMessage}
            fontSize={fontSize}
            headerStyle={messageHeaderStyle}
            username={message.username}
          />
          <p style={getStyles.text(myMessage, fontSize, message.type, messageBodyStyle)}>
            {this.renderMessageBody()}
            <MessageTime
              myMessage={myMessage}
              type={message.type}
              style={messageTimeStyle}
              createdAt={message.createdAt}
              timeFormat={timeFormat}
            />
          </p>
          {this.renderMenuItems()}
          {enableLightbox ? this.renderLightbox(message) : null}
        </div>
      </section>
    );
  }
}

export default Radium(Message);
