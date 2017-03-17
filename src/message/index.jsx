import React, { Component, PropTypes } from 'react';
import format from 'date-fns/format';
import Radium from 'radium';
import emojione from 'emojione';
import escape from 'escape-html';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import styles from './styles';
import getStyles from './get-styles';
import urlRegex from '../url-regex';
import combineStyles from '../internal/combine-styles';

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
      /** The message's type */
      type: PropTypes.oneOf(['text', 'image']).isRequired
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

  renderMessageBody() {
    const { emoji, message } = this.props;
    if (message.type === 'image') {
      return <img src={message.body} alt="user-upload" />;
    }

    if (emoji) {
      return <span dangerouslySetInnerHTML={this.createMarkup(message.body)} />;
    }

    return message.body;
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
      <section style={getStyles.container(myMessage, compact)}>
        <section style={getStyles.root(color, myMessage, avatar, compact, style)}>
          {
            compact
            ? null
            : <div style={combineStyles(styles.arrow, myMessage ? styles.myArrow : {})} />
          }
          {avatar && !compact ? <Avatar image={avatar} style={avatarStyle} /> : null}
          <header
            style={
              getStyles.header(myMessage, compact, fontSize, messageHeaderStyle)
            }
          >
            {message.username}
          </header>
          <p style={getStyles.text(myMessage, fontSize, messageBodyStyle)}>
            {this.renderMessageBody()}
            <span style={getStyles.time(myMessage, messageTimeStyle)}>
              {format(message.createdAt, timeFormat)}
            </span>
          </p>
        </section>
      </section>
    );
  }
}

export default Radium(Message);
