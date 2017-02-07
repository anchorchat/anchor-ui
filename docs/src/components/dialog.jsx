import React from 'react';
import { Dialog } from 'anchor-ui';
import PropsTable from './props-table';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function DialogDoc() {
  const componentData = components['src/components/dialog.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Dialog</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        {/* Shows a popup over the current table */}
        {/* <Dialog
          headerText="Empty dialog"
          BodyTest="Such empty"
          hideDialog={false}
          onClick={() => {}}
        /> */}
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

export default DialogDoc;
