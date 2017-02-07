import React from 'react';
import { List, ListItem, Badge, Button, IconClose } from 'anchor-ui';
import PropsTable from './props-table';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import colors from '../style/colors';
import dalek from '../assets/images/dalek.jpg';

function ListDoc() {
  const componentData = components['src/components/list.jsx'];
  const props = omitSheetFromProps(componentData.props);
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
    <article>
      <h1>List</h1>
      <hr />
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
        <hr />
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
              badge={<Badge inverted={currentChannel === channel.name} value={10} maxValue={9} />}
            />
          ))}
        </List>
        <hr />
      </section>
      <section>
        <h1>Props</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default value</th>
              <th>Required</th>
            </tr>
          </thead>
          <PropsTable props={props} />
        </table>
      </section>
    </article>
  );
}

export default ListDoc;
