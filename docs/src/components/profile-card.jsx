import React from 'react';
import { ProfileCard } from 'anchor-ui';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import PropsTable from './props-table';
import theDoctor from '../assets/images/the_doctor.jpg';
import colors from '../style/colors';

function ProfileCardDoc() {
  const componentData = components['src/components/profile-card.jsx'];
  const props = omitSheetFromProps(componentData.props);
  const currentUser = 'The Doctor';

  return (
    <article>
      <h1>Profile Card</h1>
      <hr />
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
        <hr />
      </section>
      <section>
        <h1>Examples</h1>
        <ProfileCard username={currentUser} avatar={theDoctor} style={{ borderRight: `1px solid ${colors.grey}` }} />
        <hr />
      </section>
      <section>
        <h1>Properties</h1>
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
        <hr />
      </section>
    </article>
  );
}

export default ProfileCardDoc;
