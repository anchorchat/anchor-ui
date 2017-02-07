import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import emojione from 'emojione';
import escape from 'escape-html';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from './avatar';
import getClassNames from '../internal/get-class-names';
import messageStyleSheet from '../style/messages';
import colors from '../style/colors';
import urlRegex from '../url-regex';

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
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        message: PropTypes.string.isRequired,
        messageHeader: PropTypes.string.isRequired,
        messageBody: PropTypes.string.isRequired,
        messageTime: PropTypes.string.isRequired,
        messageContainer: PropTypes.string.isRequired,
        myContainer: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
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

  constructor(props) {
    super(props);

    const {
      sheet: { classes },
      style,
      messageHeaderStyle,
      messageBodyStyle,
      messageTimeStyle
    } = props;

    const className = getClassNames(classes, style, 'message', 'Message');
    const messageHeaderClassName = getClassNames(classes, messageHeaderStyle, 'messageHeader', 'Message');
    const messageBodyClassName = getClassNames(classes, messageBodyStyle, 'messageBody', 'Message');
    const messageTimeClassName = getClassNames(classes, messageTimeStyle, 'messageTime', 'Message');

    this.state = {
      className,
      messageHeaderClassName,
      messageBodyClassName,
      messageTimeClassName
    };
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
    const { avatar, message, timeFormat, myMessage, emoji, sheet: { classes } } = this.props;
    const {
      className,
      messageHeaderClassName,
      messageBodyClassName,
      messageTimeClassName
    } = this.state;
    const { color } = this.context;
    const themeColor = color || colors.theme;

    const style = {
      position: 'absolute',
      left: '-66px',
      top: '0'
    };

    if (myMessage) {
      style.left = 'initial';
      style.right = '-66px';
    }

    return (
      <section
        className={classNames(classes.messageContainer, { [classes.myContainer]: myMessage })}
      >
        <section
          className={
            classNames(className, { [classes.myMessage]: myMessage, [classes.avatar]: avatar })
          }
          style={myMessage ? { backgroundColor: themeColor, borderRightColor: themeColor } : null}
        >
          {
            avatar
            ? <div style={style}><Avatar image={avatar} /></div>
            : null
          }
          <header className={messageHeaderClassName}>{message.username}</header>
          <p className={messageBodyClassName}>
            {
              emoji
              ? <span dangerouslySetInnerHTML={this.createMarkup(message.body)} />
              : message.body
            }
          </p>
          <span className={messageTimeClassName}>
            {moment(message.createdAt).format(timeFormat)}
          </span>
        </section>
      </section>
    );
  }
}

export default injectSheet(messageStyleSheet)(Message);
