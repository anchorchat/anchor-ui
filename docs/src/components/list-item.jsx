import React from 'react';
import { ListItem, Button, IconClose, Badge } from 'anchor-ui';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import Props from './props';
import colors from '../style/colors';
import dalek from '../assets/images/dalek.jpg';

function ListItemDoc() {
  const componentData = components['src/components/list-item.jsx'];
  const props = omitSheetFromProps(componentData.props);
  const currentChannel = 'Channel';
  const channel = [
    {
      name: 'Channel',
      maxUsers: 50,
      users: ['1', '2', '3']
    }
  ];
  return (
    <article>
      <h1>List item</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <ListItem
          key={`channel-list-${channel.name}`}
          primaryText={'Channel'}
          secondaryText={'10/50'}
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
      </section>
      <Props props={props} />
    </article>
  );
}

export default ListItemDoc;
