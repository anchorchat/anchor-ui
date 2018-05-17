import React from 'react';
import find from 'lodash/find';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Markdown from 'anchor-ui/markdown';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Paper' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  }
};

const PaperDoc = () => (
  <article className="page">
    <h1>Paper</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Examples</h1>
      <Paper style={style.paper}>
        <Paper>
          Depth: 1
        </Paper>
        <Paper depth={2}>
          Depth: 2
        </Paper>
        <Paper depth={3}>
          Depth: 3
        </Paper>
        <Paper depth={4}>
          Depth: 4
        </Paper>
        <Paper depth={5}>
          Depth: 5
        </Paper>
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default PaperDoc;
