import React, { PropTypes } from 'react';

function MessageHeader({ username }) {
  return (
    <header>
      {username}
    </header>
  );
}

MessageHeader.propTypes = {
  username: PropTypes.string.isRequired
};

export default MessageHeader;
