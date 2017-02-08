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
        <Input />
      </section>
      <Props props={props} />
    </article>
  );
}

export default InputDoc;
