import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Badge from '../../../dist/badge';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Badge from \'anchor-ui/badge\';';

function BadgeDoc() {
  const componentData = _.find(components, component => component.displayName === 'Badge');

  return (
    <article className="doc">
      <h1>Badge</h1>
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
          <Badge style={{ margin: '10px' }} inverted value={10} maxValue={9} />
          <Badge style={{ margin: '10px' }} value={10} maxValue={9} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default BadgeDoc;
