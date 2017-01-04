import React, { PropTypes } from 'react';

function ChannelList({ channels }) {
  return (
    <article>
      <ul>
        {channels.map(channel => (
          <li key={`channel-list-${channel.name}`}>{channel.name}</li>
        ))}
      </ul>
    </article>
  );
}

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired
};

export default ChannelList;
