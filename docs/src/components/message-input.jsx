import React from 'react';
import { MessageInput, Button, IconEmoji } from 'anchor-ui';
import PropsTable from './props-table';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function MessageInputDoc() {
  const componentData = components['src/components/message-input.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Message input</h1>
      <hr />
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
        <hr />
      </section>
      <section>
        <h1>Examples</h1>
        <MessageInput
          onChange={() => {}}
          placeholder="Type something..."
          value=""
          sendMessage={() => {}}
          leftButton={
            <Button iconButton onClick={() => {}}>
              <IconEmoji />
            </Button>
          }
        />
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

export default MessageInputDoc;
