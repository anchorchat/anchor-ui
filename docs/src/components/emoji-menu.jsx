import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import EmojiMenu from '../../../dist/emoji-menu';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import EmojiMenu from \'anchor-ui/emoji-menu\';';

function EmojiMenuDoc() {
  const componentData = _.find(components, component => component.displayName === 'EmojiMenu');

  return (
    <article className="doc">
      <h1>EmojiMenu</h1>
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
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0 }}>
          <EmojiMenu
            sendEmoji={() => {}}
            style={{ margin: '10px' }}
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default EmojiMenuDoc;
