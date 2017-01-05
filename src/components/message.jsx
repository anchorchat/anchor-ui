import React, { PropTypes } from 'react';
import moment from 'moment';

function Message({ message, timeFormat }) {
  const format = timeFormat || 'HH:mm';

  return (
    <section>
      <header>{message.username}</header>
      <p>{message.body}</p>
      <span>{moment(message.createdAt).format(format)}</span>
    </section>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  timeFormat: PropTypes.string
};

export default Message;
