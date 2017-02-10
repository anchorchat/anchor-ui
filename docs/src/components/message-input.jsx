import React from 'react';
import MessageInput from 'anchor-ui/message-input';
import Button from 'anchor-ui/button';
import { IconEmoji } from 'anchor-ui/icons';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

function MessageInputDoc() {
  const componentData = _.find(components, component => component.displayName === 'MessageInput');

  return (
    <article className="doc">
      <h1>Message input</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
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
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default MessageInputDoc;
