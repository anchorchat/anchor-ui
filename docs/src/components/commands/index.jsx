import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Props from '../props';
import components from '../../../components.json';
import SlashCommands from './slash-commands';
import Mentions from './mentions';

const usage = '```js\n import Commands from \'anchor-ui/commands\';';

const CommandsDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Commands');

  return (
    <article className="doc">
      <h1>Commands</h1>
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
        <SlashCommands />
        <Mentions />
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default CommandsDoc;
