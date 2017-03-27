import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import ProfileCard from '../../../dist/profile-card';
import components from '../../components.json';
import Props from './props';

const usage = '```js\n import ProfileCard from \'anchor-ui/profile-card\';';

function ProfileCardDoc() {
  const componentData = _.find(components, component => component.displayName === 'ProfileCard');

  return (
    <article className="doc">
      <h1>Profile Card</h1>
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
        <ProfileCard username="Sjaak" avatar="https://avatars1.githubusercontent.com/u/6596471?v=3&s=400" />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ProfileCardDoc;
