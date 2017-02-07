import React from 'react';
import { ChannelHeader, Button, IconChannels, IconPeople } from 'anchor-ui';
import PropsTable from './props-table';
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
        {/* Channel header displays two buttons
          on the top left & right of the screen */}
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

export default ChannelHeaderDoc;
