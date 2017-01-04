import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import listStyle from '../style/lists';
import ListItem from './list-item';

function ChannelList({ channels, sheet: { classes }, style }) {
  return (
    <article>
      <ul className={getClassNames(classes, 'list', style)}>
        {channels.map(channel => (
          <ListItem
            key={`channel-list-${channel.name}`}
            primaryText={channel.name}
            secondaryText={`${channel.users.length}/${channel.maxUsers}`}
          />
        ))}
      </ul>
    </article>
  );
}

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      list: PropTypes.string.isRequired,
      listItem: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    list: PropTypes.object,
    listItem: PropTypes.object
  })
};

export default injectSheet(listStyle)(ChannelList);
