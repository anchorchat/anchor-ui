import React from 'react';
import find from 'lodash/find';
import Props from '../props';
import components from '../../components.json';
import SlashCommands from './slash-commands';
import Mentions from './mentions';
import Markdown from '../markdown';

const usage = `
  \`\`\`js
  import Commands from 'anchor-ui/commands';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Commands' });

const CommandsDoc = () => (
  <article className="page">
    <h1>Commands</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Examples</h1>
      <SlashCommands />
      <Mentions />
    </section>
    <Props props={componentData.props} />
  </article>
);

export default CommandsDoc;
