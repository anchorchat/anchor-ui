import React from 'react';
import { ProfileCard, colors } from 'anchor-ui';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import Props from './props';
import theDoctor from '../assets/images/the_doctor.jpg';

function ProfileCardDoc() {
  const componentData = components['src/components/profile-card.jsx'];
  const props = omitSheetFromProps(componentData.props);
  const currentUser = 'The Doctor';

  return (
    <article>
      <h1>Profile Card</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <ProfileCard username={currentUser} avatar={theDoctor} style={{ borderRight: `1px solid ${colors.grey}` }} />
      </section>
      <Props props={props} />
    </article>
  );
}

export default ProfileCardDoc;
