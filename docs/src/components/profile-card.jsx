import React from 'react';
import { ProfileCard, colors } from 'anchor-ui';
import _ from 'underscore';
import components from '../../components.json';
import Props from './props';
import theDoctor from '../assets/images/the_doctor.jpg';

function ProfileCardDoc() {
  const componentData = _.find(components, component => component.displayName === 'ProfileCard');

  const currentUser = 'The Doctor';

  return (
    <article className="doc">
      <h1>Profile Card</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <ProfileCard username={currentUser} avatar={theDoctor} style={{ borderRight: `1px solid ${colors.grey}` }} />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ProfileCardDoc;
