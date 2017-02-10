import React from 'react';
import Input from 'anchor-ui/input';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

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
        <h1>Examples</h1>
        <Input
          onChange={() => {}}
          value="Start typing..."
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
