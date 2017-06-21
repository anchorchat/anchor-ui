import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import EmojiMenu from '../../../dist/emoji-menu';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import EmojiMenu from \'anchor-ui/emoji-menu\';';

const EmojiMenuDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'EmojiMenu');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    emojiMenu: { margin: '10px' }
  };

  return (
    <article className="doc">
      <h1>EmojiMenu</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <a
        href="https://www.emojione.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        This component uses free Emoji icons supplied by EmojiOne
      </a>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <EmojiMenu
            sendEmoji={() => {}}
            style={style.emojiMenu}
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default EmojiMenuDoc;
