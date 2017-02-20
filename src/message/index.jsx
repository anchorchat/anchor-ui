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

function getContainerStyle(myMessage, compact) {
  if (compact) {
    return styles.messageContainer;
  }

  if (myMessage) {
    return combineStyles(styles.messageContainer, styles.myContainer);
  }

  return styles.messageContainer;
}

function getStyle(themeColor, myMessage, avatar, compact, overrideStyle) {
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

  if (compact) {
    style = combineStyles(style, {
      marginLeft: '0',
      marginRight: '0',
      maxWidth: '100%',
      display: 'flex'
    });
  }

  return combineStyles(style, overrideStyle);
}

function getTextStyle(style, myMessage, fontSize, overrideStyle) {
  let combinedStyles = style;

  if (myMessage) {
    combinedStyles = combineStyles({ ...combinedStyles, color: colors.white }, overrideStyle);
  }

  if (fontSize && fontSize === 'medium') {
    combinedStyles = combineStyles({ ...combinedStyles, fontSize: '20px', lineHeight: '22px' }, overrideStyle);
  }

  if (fontSize && fontSize === 'large') {
    combinedStyles = combineStyles({ ...combinedStyles, fontSize: '24px', lineHeight: '26px' }, overrideStyle);
  }

  return combineStyles(combinedStyles, overrideStyle);
}

function getHeaderStyle(style, myMessage, compact, overrideStyle) {
  let combinedStyles = style;

  if (myMessage) {
    combinedStyles = combineStyles({ ...combinedStyles, color: colors.white }, overrideStyle);
  }

  if (compact) {
    combinedStyles = combineStyles({ ...combinedStyles, flexShrink: '0', marginRight: '10px' }, overrideStyle);
  }

  return combineStyles(combinedStyles, overrideStyle);
}

function getTimeStyle(style, myMessage, overrideStyle) {
  if (myMessage) {
    return combineStyles({ ...style, left: 0, right: 'initial', opacity: '.75' }, overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

/**
 * Messages with optional styling for the current user's message
 */
class Message extends Component {
  static displayName = 'Message'

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
     * The font size of messages
     * Default is small. Possibilities for medium and large
     */
    fontSize: PropTypes.string,
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
    enableLinks: PropTypes.bool,
    /**
     * Enables compact messages
     */
    compact: PropTypes.bool
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
    compact: false
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
      messageTimeStyle,
      compact,
      fontSize
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
      <section style={getContainerStyle(myMessage, compact)}>
        <section style={getStyle(color, myMessage, avatar, compact, style)}>
          {
            compact
            ? null
            : <div style={combineStyles(styles.arrow, myMessage ? styles.myArrow : {})} />
          }
          {avatar && !compact ? <Avatar image={avatar} style={avatarStyle} /> : null}
          <header
            style={getHeaderStyle(styles.messageHeader, myMessage, compact, messageHeaderStyle)}
          >
            {message.username}
          </header>
          <p style={getTextStyle(styles.messageBody, myMessage, fontSize, messageBodyStyle)}>
            {
              emoji
              ? <span dangerouslySetInnerHTML={this.createMarkup(message.body)} />
              : message.body
            }
            <span style={getTimeStyle(styles.messageTime, myMessage, messageTimeStyle)}>
              {format(message.createdAt, timeFormat)}
            </span>
          </p>
        </section>
      </section>
    );
  }
}

export default Radium(Message);
