import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import emojione from 'emojione';
import escape from 'escape-html';
import Avatar from './avatar';
import getClassNames from '../internal/get-class-names';
import messageStyleSheet from '../style/messages';
import colors from '../style/colors';

class Message extends Component {
  static propTypes = {
    avatar: PropTypes.string,
    message: PropTypes.shape({
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
      ]).isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
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
    style: PropTypes.instanceOf(Object),
    messageHeaderStyle: PropTypes.instanceOf(Object),
    messageBodyStyle: PropTypes.instanceOf(Object),
    messageTimeStyle: PropTypes.instanceOf(Object),
    myMessage: PropTypes.bool,
    emoji: PropTypes.bool
  }

  static defaultProps = {
    avatar: '',
    style: {},
    timeFormat: 'HH:mm',
    messageHeaderStyle: {},
    messageBodyStyle: {},
    messageTimeStyle: {},
    myMessage: false,
    emoji: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  static createMarkup(text) {
    const escapedText = escape(text);

    return {
      __html: emojione.toImage(escapedText)
    };
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
              ? <span dangerouslySetInnerHTML={Message.createMarkup(message.body)} />
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
