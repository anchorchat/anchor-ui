import React, { PropTypes } from 'react';

function Message({ message }) {
  return (
    <section>
      {message.body}
    </section>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
