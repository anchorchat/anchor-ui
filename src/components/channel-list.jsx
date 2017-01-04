import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import listStyle from '../style/lists';

function ChannelList({ channels, sheet: { classes }, style }) {
  return (
    <article>
      <ul className={getClassNames(classes, 'ul', style)}>
        {channels.map(channel => (
          <li
            className={getClassNames(classes, 'li', style)}
            key={`channel-list-${channel.name}`}
          >
            {channel.name}
          </li>
        ))}
      </ul>
    </article>
  );
}

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      ul: PropTypes.string.isRequired,
      li: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    ul: PropTypes.object,
    li: PropTypes.object
  })
};

export default injectSheet(listStyle)(ChannelList);
