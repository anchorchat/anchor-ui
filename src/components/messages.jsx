import React, { PropTypes } from 'react';
import Message from './message';

function Messages({ messages }) {
  return (
    <article>
      {messages.map(message => (
        <Message message={message} key={`message-${message.username}`} />
      ))}
    </article>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    username: PropTypes.string.isRequired
  })).isRequired,
};

export default Messages;
