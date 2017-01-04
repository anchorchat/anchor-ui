import React, { PropTypes } from 'react';

function MessageInput({ onChange, value }) {
  return <input onChange={onChange} value={value} type="text" />;
}

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default MessageInput;
