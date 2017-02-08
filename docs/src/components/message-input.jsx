import React from 'react';
import { MessageInput, Button, IconEmoji } from 'anchor-ui';
import Props from './props';
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
      <Props props={props} />
    </article>
  );
}

export default MessageInputDoc;
