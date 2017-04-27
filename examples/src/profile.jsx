/* eslint-disable max-len, no-console */
import React from 'react';
import { Profile, Button, Dialog } from '../../dist';
import { colors } from '../../dist/settings';
import theTim from './assets/images/the_tim.gif';

export default () => (
  <section className="profile" style={{ background: colors.background }}>
    <Dialog hideDialog={() => console.log('hide')} style={{ padding: '0' }} open>
      <Profile
        header="The Doctor"
        secondaryText="over 2000, Male"
        avatar={theTim}
        coverImage={theTim}
        button={<Button>Edit Information</Button>}
      >
        <section style={{ padding: '16px', maxWidth: '40em', margin: '0a auto' }}>
          <p>You hit me with a cricket bat. I&#39;m nobody&#39;s taxi service; I&#39;m not gonna be there to catch you every time you feel like jumping out of a spaceship. Sorry, checking all the water in this area; there&#39;s an escaped fish.</p>
        </section>
      </Profile>
    </Dialog>
  </section>
);
