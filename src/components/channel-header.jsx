import React, { PropTypes } from 'react';

function ChannelHeader({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

ChannelHeader.propTypes = {
  name: PropTypes.string.isRequired
};

export default ChannelHeader;
