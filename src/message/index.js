import React, { Component, PropTypes } from 'react';
import {
  View,
  Text
} from 'react-native';
import format from 'date-fns/format';
import Radium from 'radium';
import emojione from 'emojione';
import escape from 'escape-html';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import styles from '../style/messages';
import colors from '../settings/colors';
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
    style = combineStyles(
      combineStyles(styles.message, styles.myMessage),
      { backgroundColor: color, borderRightColor: color }
    );
  }

  if (avatar) {
    style = combineStyles(style, styles.avatar);
  }

  if (myMessage && avatar) {
    style = combineStyles(style, { marginLeft: '0', marginRight: '66px' });
  }

  if (compact) {
    style = combineStyles(
      style,
      {
        marginLeft: '0',
        marginRight: '0',
        maxWidth: '100%',
        display: 'flex'
      }
    );
  }

  return combineStyles(style, overrideStyle);
}

function getTextStyle(myMessage, fontSize, overrideStyle) {
  let style = styles.messageBody;

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if (fontSize === 'medium') {
    style = combineStyles(style, { fontSize: '18px', lineHeight: '20px' });
  }

  if (fontSize === 'large') {
    style = combineStyles(style, { fontSize: '22px', lineHeight: '24px' });
  }

  return combineStyles(style, overrideStyle);
}

function getHeaderStyle(myMessage, compact, fontSize, overrideStyle) {
  let style = styles.messageHeader;

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if (compact) {
    style = combineStyles(style, { flexShrink: '0', marginRight: '10px', marginBottom: '0' });
  }

  if (fontSize === 'medium') {
    style = combineStyles(style, { fontSize: '16px', lineHeight: '20px' });
  }

  if (fontSize === 'large') {
    style = combineStyles(style, { fontSize: '18px', lineHeight: '24px' });
  }

  return combineStyles(style, overrideStyle);
}

function getTimeStyle(myMessage, overrideStyle) {
  let style = styles.messageTime;

  if (myMessage) {
    style = combineStyles(style, { left: 0, right: 'initial', opacity: '.75' });
  }

  return combineStyles(style, overrideStyle);
}

/** Messages with optional styling for the current user's message */
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
    /** Enables links in messages */
    enableLinks: PropTypes.bool,
    /** Enables compact messages */
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
      __html: parsedText
    };
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
      <View style={getContainerStyle(myMessage, compact)}>
        <View style={getStyle(color, myMessage, avatar, compact, style)}>
          {
            compact
            ? null
            : <View style={combineStyles(styles.arrow, myMessage ? styles.myArrow : {})} />
          }
          {avatar && !compact ? <Avatar image={avatar} style={avatarStyle} /> : null}
          <View
            style={
              getHeaderStyle(myMessage, compact, fontSize, messageHeaderStyle)
            }
          >
            {message.username}
          </View>
          <Text style={getTextStyle(myMessage, fontSize, messageBodyStyle)}>
            {
               message.body
            }
            <Text style={getTimeStyle(myMessage, messageTimeStyle)}>
              {format(message.createdAt, timeFormat)}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Radium(Message);
