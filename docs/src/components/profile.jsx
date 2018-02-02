import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import Profile from '../../../dist/profile';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Profile from 'anchor-ui/profile';
  \`\`\`
`;

const profileImage = faker.internet.avatar();

const ProfileDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Profile');
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

  return (
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
            header="Sjaak"
            secondaryText="Secondary text"
            avatar={profileImage}
            coverImage={profileImage}
            button={<Button>Edit Information</Button>}
            style={style.profile}
            status="online"
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default ProfileDoc;
