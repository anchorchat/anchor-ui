import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import styles from './styles';
import getStyles from './get-styles';
import Lightbox from '../lightbox';
import TextMessage from './text-message';

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

    this.toggleLightbox = this.toggleLightbox.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context, nextContext)
    );
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

    let onClick = null;

    if (enableLightbox) {
      onClick = this.toggleLightbox;
    }

    let messageElement = <TextMessage color={color} {...this.props} />;

    if (message.type === 'image') {
      messageElement = <img onClick={onClick} style={styles.messageImage} src={message.body} alt="user-upload" />;
    }

    if (message.type === 'sticker') {
      messageElement = <img style={styles.messageSticker} src={message.body} alt="user-upload" />;
    }

    return (
      <section style={getStyles.container(myMessage, compact)} {...custom}>
        {messageElement}
      </section>
    );
  }
}

export default Radium(Message);
