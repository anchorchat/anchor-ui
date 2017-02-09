import React from 'react';
import { ChannelHeader, Button, IconChannels, IconPeople } from 'anchor-ui';
import Props from './props';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function ChannelHeaderDoc() {
  const componentData = components['src/components/channel-header.jsx'];
  const props = omitSheetFromProps(componentData.props);
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
      <Props props={props} />
    </article>
  );
}

export default ChannelHeaderDoc;
