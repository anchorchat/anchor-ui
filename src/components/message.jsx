import React, { PropTypes } from 'react';
import moment from 'moment';

function Message({ message, momentFormat }) {
  const format = momentFormat || 'HH:mm';

  return (
    <section>
      <div>
        <header>{message.username}</header>
        {message.body}
      </div>
      {moment(message.createdAt).format(format)}
    </section>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  momentFormat: PropTypes.string
};

export default Message;
