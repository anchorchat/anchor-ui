import React from 'react';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';
import Button from 'anchor-ui/button';
import { IconClose } from 'anchor-ui/icons';
import { colors } from 'anchor-ui/settings';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';
import dalek from '../assets/images/dalek.jpg';

function ListDoc() {
  const componentData = _.find(components, component => component.displayName === 'List');

  const currentChannel = 'Channel3';
  const channelListStyle = {
    height: 'calc(100% - 116px)',
    borderRight: `1px solid ${colors.grey}`
  };
  const channels = [
    {
      name: 'Channel1',
      maxUsers: 50,
      users: ['1', '2', '3']
    },
    {
      name: 'Channel2',
      maxUsers: 50,
      users: ['1', '2', '3']
    },
    {
      name: 'Channel3',
      maxUsers: 50,
      users: ['1', '2', '3']
    },
    {
      name: 'Channel4',
      maxUsers: 50,
      users: ['1', '2', '3']
    }
  ];
  return (
    <article className="doc">
      <h1>List</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <List style={channelListStyle} >
          {channels.map(channel => (
            <ListItem
              key={`channel-list-${channel.name}`}
              primaryText={channel.name}
              secondaryText={`${channel.users.length}/${channel.maxUsers}`}
              active={currentChannel === channel.name}
              rightButton={
                currentChannel === channel.name
                ? <Button iconButton onClick={() => {}}>
                  <IconClose color={colors.white} />
                </Button>
                : null
              }
              avatar={dalek}
            />
          ))}
        </List>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ListDoc;
