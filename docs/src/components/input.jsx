import React from 'react';
import { Input } from 'anchor-ui';
import Props from './props';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function InputDoc() {
  const componentData = components['src/components/input.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
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
      <Props props={props} />
    </article>
  );
}

export default InputDoc;
