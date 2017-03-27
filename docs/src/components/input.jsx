import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Input from '../../../dist/input';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import Input from \'anchor-ui/input\';';

function InputDoc() {
  const componentData = _.find(components, component => component.displayName === 'Input');

  return (
    <article className="doc">
      <h1>Input</h1>
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
        <Input
          onChange={() => {}}
          value="Start typing..."
          placeholder="Start typing..."
          type="text"
          label="Text example"
          name="example"
        />
        <Input
          onChange={() => {}}
          value="20"
          type="number"
          label="Number example"
          name="example"
        />
        <Input
          onChange={() => {}}
          value=""
          type="date"
          label="Date example"
          name="example"
        />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default InputDoc;
