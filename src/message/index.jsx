import React, { Component, PropTypes } from 'react';
import format from 'date-fns/format';
import Radium from 'radium';
import emojione from 'emojione';
import escape from 'escape-html';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import styles from '../style/messages';
import { colors } from '../settings';
import urlRegex from '../url-regex';
import combineStyles from '../internal/combine-styles';

function getContainerStyle(myMessage) {
  if (myMessage) {
    return combineStyles(styles.messageContainer, styles.myContainer);
  }

  return styles.messageContainer;
}

function getStyle(themeColor, myMessage, avatar, overrideStyle) {
  let style = styles.message;

  const color = themeColor || colors.theme;

  if (myMessage) {
    style = combineStyles(styles.message, styles.myMessage);
    style = { ...style, backgroundColor: color, borderRightColor: color };
  }

  if (avatar) {
    style = combineStyles(style, styles.avatar);
  }

  if (myMessage && avatar) {
    style = combineStyles(style, { marginLeft: '0', marginRight: '66px' });
  }

  return combineStyles(style, overrideStyle);
}

function getTextStyle(style, myMessage, overrideStyle) {
  if (myMessage) {
    return combineStyles({ ...style, color: colors.white }, overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

function getTimeStyle(style, myMessage, overrideStyle) {
  if (myMessage) {
    return combineStyles({ ...style, left: 0, right: 'initial' }, overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

/**
 * Message styling
 */
class Message extends Component {
  static propTypes = {
    /**
     * Path to the user's profile image will only be rendered if provided
     */
    avatar: PropTypes.string,
    /**
     * Message object containing : body, createdAt, username
     */
    message: PropTypes.shape({
      /**
       * The message's body text
       */
      body: PropTypes.string.isRequired,
      /**
       * Time when the message was created
       */
      createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
      ]).isRequired,
      /**
       * The sender's username
       */
      username: PropTypes.string.isRequired,
    }).isRequired,
    /**
     * The format of displaying message.createdAt
     */
    timeFormat: PropTypes.string,
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the header element
     */
    messageHeaderStyle: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the body element
     */
    messageBodyStyle: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the time element
     */
    messageTimeStyle: PropTypes.instanceOf(Object),
    /**
     * Flag used to change message styles.
     * True if the message was sent by the current user
     */
    myMessage: PropTypes.bool,
    /**
     * Enable emojione for messages
     */
    emoji: PropTypes.bool,
    /**
     * Enables links in messages
     */
    enableLinks: PropTypes.bool
  }

  static defaultProps = {
    avatar: '',
    style: {},
    timeFormat: 'HH:mm',
    messageHeaderStyle: {},
    messageBodyStyle: {},
    messageTimeStyle: {},
    myMessage: false,
    emoji: false,
    enableLinks: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
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

  render() {
    const {
      avatar,
      message,
      timeFormat,
      myMessage,
      emoji,
      style,
      messageHeaderStyle,
      messageBodyStyle,
      messageTimeStyle
    } = this.props;
    const { color } = this.context;

    const avatarStyle = {
      position: 'absolute',
      left: '-66px',
      top: '0'
    };

    if (myMessage) {
      avatarStyle.left = 'initial';
      avatarStyle.right = '-66px';
    }

    return (
      <section style={getContainerStyle(myMessage)}>
        <section style={getStyle(color, myMessage, avatar, style)}>
          <div style={combineStyles(styles.arrow, myMessage ? styles.myArrow : {})} />
          {avatar ? <Avatar image={avatar} style={avatarStyle} /> : null}
          <header style={getTextStyle(styles.messageHeader, myMessage, messageHeaderStyle)}>
            {message.username}
          </header>
          <p style={getTextStyle(styles.messageBody, myMessage, messageBodyStyle)}>
            {
              emoji
              ? <span dangerouslySetInnerHTML={this.createMarkup(message.body)} />
              : message.body
            }
          </p>
          <span style={getTimeStyle(styles.messageTime, myMessage, messageTimeStyle)}>
            {format(message.createdAt, timeFormat)}
          </span>
        </section>
      </section>
    );
  }
}

export default Radium(Message);
