import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Checkbox from '../../../dist/checkbox';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Checkbox from \'anchor-ui/checkbox\';';

function CheckboxDoc() {
  const componentData = _.find(components, component => component.displayName === 'Checkbox');

  return (
    <article className="doc">
      <h1>Checkbox</h1>
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
          <Checkbox
            onChange={() => {}}
            label="Unchecked"
            name="example"
            style={{ margin: '10px' }}
          />
          <Checkbox
            onChange={() => {}}
            label="Checked"
            name="example"
            style={{ margin: '10px' }}
            checked
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default CheckboxDoc;