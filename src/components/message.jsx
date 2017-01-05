import React, { PropTypes } from 'react';
import moment from 'moment';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import getClassNames from '../get-class-names';
import messageStyle from '../style/messages';

function Message({ message, timeFormat, myMessage, sheet: { classes }, style }) {
  const format = timeFormat || 'HH:mm';

  return (
    <section
      className={
        classNames(getClassNames(classes, 'message', style), { [classes.myMessage]: myMessage })
      }
    >
      <header className={getClassNames(classes, 'messageHeader', style)}>{message.username}</header>
      <p className={getClassNames(classes, 'messageBody', style)}>{message.body}</p>
      <span className={getClassNames(classes, 'messageTime', style)}>{moment(message.createdAt).format(format)}</span>
    </section>
  );
}

Message.propTypes = {
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
  style: PropTypes.shape({
    message: PropTypes.object
  }),
  myMessage: PropTypes.bool
};

export default injectSheet(messageStyle)(Message);
