import React from 'react';
import { Loader } from 'anchor-ui';
import PropsTable from './props-table';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function LoaderDoc() {
  const componentData = components['src/components/loader.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Loader</h1>
      <hr />
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
        <hr />
      </section>
      <section>
        <h1>Examples</h1>
        <Loader />
        <hr />
        {/* Maybe more than one loader (inverted color?) */}
        <Loader />{/* <-- todo (doesn't work as expected)*/}
        <hr />
      </section>
      <section>
        <h1>Props</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default value</th>
              <th>Required</th>
            </tr>
          </thead>
          <PropsTable props={props} />
        </table>
      </section>
    </article>
  );
}

export default LoaderDoc;
