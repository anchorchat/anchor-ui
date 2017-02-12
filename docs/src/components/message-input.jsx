import React from 'react';
import ReactMarkdown from 'react-markdown';
import MessageInput from 'anchor-ui/message-input';
import Button from 'anchor-ui/button';
import { IconEmoji } from 'anchor-ui/icons';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import MessageInput from \'anchor-ui/message-input\';';

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
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
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
