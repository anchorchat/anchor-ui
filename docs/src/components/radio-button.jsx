import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import RadioButton from '../../../dist/radio-button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import RadioButton from \'anchor-ui/radio-button\';';

function RadioButtonDoc() {
  const componentData = _.find(components, component => component.displayName === 'RadioButton');

  return (
    <article className="doc">
      <h1>RadioButton</h1>
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
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0, padding: 0 }}>
          <RadioButton
            onChange={() => {}}
            label="Unchecked"
            name="example"
            value="example"
            style={{ margin: '10px' }}
          />
          <RadioButton
            onChange={() => {}}
            label="Checked"
            name="example"
            value="example"
            style={{ margin: '10px' }}
            checked
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default RadioButtonDoc;
