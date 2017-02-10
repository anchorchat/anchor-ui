import React from 'react';
import ListItem from 'anchor-ui/list-item';
import Button from 'anchor-ui/button';
import { IconClose } from 'anchor-ui/icons';
import Badge from 'anchor-ui/badge';
import { colors } from 'anchor-ui/settings';
import _ from 'underscore';
import components from '../../components.json';
import Props from './props';
import dalek from '../assets/images/dalek.jpg';

function ListItemDoc() {
  const componentData = _.find(components, component => component.displayName === 'ListItem');

  const currentChannel = 'Channel';
  const channel = [
    {
      name: 'Channel',
      maxUsers: 50,
      users: ['1', '2', '3']
    }
  ];
  return (
    <article className="doc">
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
      <Props props={componentData.props} />
    </article>
  );
}

export default ListItemDoc;
