import React from 'react';
import find from 'lodash/find';
import faker from 'faker';
import Profile from '../anchor-ui/profile';
import Button from '../anchor-ui/button';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Profile from 'anchor-ui/profile';
  \`\`\`
`;

const username = faker.internet.userName();
const secondaryText = faker.name.jobTitle();

const componentData = find(components, { displayName: 'Profile' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  profile: {
    width: '100%',
    margin: '10px'
  }
};

const ProfileDoc = () => (
  <article className="page">
    <h1>Profile</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Examples</h1>
      <Paper style={style.paper}>
        <Profile
          header={username}
          secondaryText={secondaryText}
          avatar="https://source.unsplash.com/random/240x240"
          coverImage="https://source.unsplash.com/random/800x400"
          button={<Button>Edit Information</Button>}
          style={style.profile}
          status="online"
        />
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default ProfileDoc;
