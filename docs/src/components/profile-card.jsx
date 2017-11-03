import React from 'react';
import _ from 'lodash';
import ProfileCard from '../../../dist/profile-card';
import components from '../../components.json';
import Props from './props';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import ProfileCard from 'anchor-ui/profile-card';
  \`\`\`
`;

const ProfileCardDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'ProfileCard');
  const style = {
    paper: {
      margin: 0,
      padding: '20px'
    }
  };

  return (
    <article className="doc">
      <h1>ProfileCard</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <Markdown markdown={usage} />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <ProfileCard username="Sjaak" avatar="https://avatars1.githubusercontent.com/u/6596471?v=3&s=400" />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default ProfileCardDoc;
