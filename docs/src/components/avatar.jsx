import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Avatar from '../../../dist/avatar';
import components from '../../components.json';
import Props from './props';

const usage = '```js\n import Avatar from \'anchor-ui/avatar\';';

function AvatarDoc() {
  const componentData = _.find(components, component => component.displayName === 'Avatar');

  return (
    <article className="doc">
      <h1>Avatar</h1>
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
        <Avatar image="https://avatars1.githubusercontent.com/u/6596471?v=3&s=400" />
        <Avatar image="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400" />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default AvatarDoc;
