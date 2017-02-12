import React from 'react';
import ReactMarkdown from 'react-markdown';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';
import Button from 'anchor-ui/button';
import { IconClose } from 'anchor-ui/icons';
import { colors } from 'anchor-ui/settings';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import List from \'anchor-ui/list\';';

function ListDoc() {
  const componentData = _.find(components, component => component.displayName === 'List');

  const currentChannel = 'Channel3';

  const channels = [
    {
      name: 'Channel1',
      maxUsers: 20,
      users: ['1', '2'],
      avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400'
    },
    {
      name: 'Channel2',
      maxUsers: 15,
      users: ['1', '2', '3'],
      avatar: 'https://avatars0.githubusercontent.com/u/14125280?v=3&s=400'
    },
    {
      name: 'Channel3',
      maxUsers: 50,
      users: ['1', '2', '3', '4', '5'],
      avatar: 'https://avatars0.githubusercontent.com/u/16486197?v=3&s=400'
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
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <List>
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
              avatar={channel.avatar}
            />
          ))}
        </List>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ListDoc;
