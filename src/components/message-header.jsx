import React, { PropTypes } from 'react';
import moment from 'moment';

function MessageHeader({ createdAt, username, momentFormat }) {
  const format = momentFormat || 'HH:mm';

  return (
    <header>
      {username}, {moment(createdAt).format(format)}
    </header>
  );
}

MessageHeader.propTypes = {
  createdAt: PropTypes.instanceOf(Date).isRequired,
  username: PropTypes.string.isRequired,
  momentFormat: PropTypes.string
};

export default MessageHeader;
