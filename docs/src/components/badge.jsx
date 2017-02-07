import React from 'react';
import { Badge } from 'anchor-ui';
import PropsTable from './props-table';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';

function BadgeDoc() {
  const componentData = components['src/components/badge.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Badge</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Badge inverted={true} value={10} maxValue={9} />
        <Badge inverted={false} value={10} maxValue={9} />
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

export default BadgeDoc;
