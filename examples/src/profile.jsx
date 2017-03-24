import React from 'react';
import { Profile, Button } from '../../dist';
import { colors } from '../../dist/settings';
import theDoctor from './assets/images/the_doctor.jpg';
import dalek from './assets/images/dalek.jpg';

export default () => (
  <section className="profile" style={{ background: colors.background }}>
    <Profile
      headerText="The Doctor"
      secondaryText="over 2000, Male"
      avatar={theDoctor}
      coverImage={dalek}
      editButton={<Button>Edit Information</Button>}
      closeProfile={() => {}}
    >
      <section style={{ padding: '16px', maxWidth: '40em', margin: '0a auto' }}>
        <p>You hit me with a cricket bat. I&#39;m nobody&#39;s taxi service; I&#39;m not gonna be there to catch you every time you feel like jumping out of a spaceship. Sorry, checking all the water in this area; there&#39;s an escaped fish.</p>
      </section>
    </Profile>
  </section>
);
