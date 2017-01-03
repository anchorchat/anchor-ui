import React, { PropTypes } from 'react';
import MessageHeader from './message-header';

function Message({ message, momentFormat }) {
  return (
    <section>
      <MessageHeader
        createdAt={message.createdAt}
        username={message.username}
        momentFormat={momentFormat}
      />
      {message.body}
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
