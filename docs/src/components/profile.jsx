import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Profile from '../../../dist/profile';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Profile from \'anchor-ui/profile\';';

function ProfileDoc() {
  const componentData = _.find(components, component => component.displayName === 'Profile');

  return (
    <article className="doc">
      <h1>Profile</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0 }}>
          <Profile
            header="Sjaak"
            secondaryText="Secondary text"
            avatar="https://avatars1.githubusercontent.com/u/6596471?v=3&s=400"
            coverImage="https://avatars1.githubusercontent.com/u/6596471?v=3&s=400"
            button={<button>Edit Information</button>}
            style={{ margin: '10px', width: '100%'}}>
          </Profile>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ProfileDoc;
