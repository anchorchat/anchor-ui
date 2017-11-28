import React from 'react';
import _ from 'lodash';
import List from '../../../dist/list';
import ListItem from '../../../dist/list-item';
import Button from '../../../dist/button';
import { IconClose } from '../../../dist/icons';
import colors from '../../../dist/settings/colors';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import List from 'anchor-ui/list';
  \`\`\`
`;

const ListDoc = () => {
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

  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    }
  };

  return (
    <article className="page">
      <h1>List</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <Markdown markdown={usage} title="Code example" />
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <List>
            {channels.map(channel => (
              <ListItem
                key={`channel-list-${channel.name}`}
                primaryText={channel.name}
                secondaryText={`${channel.users.length}/${channel.maxUsers}`}
                active={currentChannel === channel.name}
                rightButton={
                  currentChannel === channel.name
                  ? (
                    <Button iconButton onClick={() => {}}>
                      <IconClose color={colors.white} />
                    </Button>
                  )
                  : null
                }
                avatar={channel.avatar}
              />
            ))}
          </List>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default ListDoc;
