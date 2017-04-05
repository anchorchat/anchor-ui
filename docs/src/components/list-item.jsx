import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import ListItem from '../../../dist/list-item';
import Badge from '../../../dist/badge';
import components from '../../components.json';
import Props from './props';
import Paper from '../../../dist/paper';

const usage = '```js\n import ListItem from \'anchor-ui/list-item\';';

function ListItemDoc() {
  const componentData = _.find(components, component => component.displayName === 'ListItem');

  return (
    <article className="doc">
      <h1>ListItem</h1>
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
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0, padding: '20px' }}>
          <ListItem
            primaryText="Channel"
            secondaryText="10/50"
            avatar="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400"
            badge={<Badge value={4} maxValue={9} />}
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ListItemDoc;
