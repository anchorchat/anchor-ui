import React from 'react';
import { Avatar } from 'anchor-ui';
import components from '../../components.json';
import PropsTable from './props-table';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import theDoctor from '../assets/images/the_doctor.jpg';
import dalek from '../assets/images/dalek.jpg';

function AvatarDoc() {
  const componentData = components['src/components/avatar.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Avatar</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Avatar image={theDoctor} />
        <Avatar image={dalek} />
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

export default AvatarDoc;
