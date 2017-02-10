import React from 'react';
import { ChannelHeader, Button, IconChannels, IconPeople } from 'anchor-ui';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

function ChannelHeaderDoc() {
  const componentData = _.find(components, component => component.displayName === 'ChannelHeader');

  return (
    <article>
      <h1>Channel header</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <ChannelHeader
          name="Channel 1"
          rightButton={
            <Button iconButton onClick={() => {}}>
              <IconPeople />
            </Button>
          }
          leftButton={
            <Button iconButton onClick={() => {}}>
              <IconChannels />
            </Button>
          }
        />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ChannelHeaderDoc;
