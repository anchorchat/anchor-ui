import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import getClassNames from '../internal/get-class-names';
import messageStyle from '../style/messages';

class Message extends Component {
  static propTypes = {
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
        message: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    messageHeaderStyle: PropTypes.instanceOf(Object),
    messageBodyStyle: PropTypes.instanceOf(Object),
    messageTimeStyle: PropTypes.instanceOf(Object),
    myMessage: PropTypes.bool
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
    const { message, timeFormat, myMessage, sheet: { classes } } = this.props;
    const {
      className,
      messageHeaderClassName,
      messageBodyClassName,
      messageTimeClassName
    } = this.state;
    const format = timeFormat || 'HH:mm';

    return (
      <section className={classNames(className, { [classes.myMessage]: myMessage })}>
        <header className={messageHeaderClassName}>{message.username}</header>
        <p className={messageBodyClassName}>{message.body}</p>
        <span className={messageTimeClassName}>{moment(message.createdAt).format(format)}</span>
      </section>
    );
  }
}

export default injectSheet(messageStyle)(Message);
