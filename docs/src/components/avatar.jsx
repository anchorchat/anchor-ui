import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Avatar from '../../../dist/avatar';
import components from '../../components.json';
import Props from './props';
import Paper from '../../../dist/paper';

const usage = '```js\n import Avatar from \'anchor-ui/avatar\';';

function AvatarDoc() {
  const componentData = _.find(components, component => component.displayName === 'Avatar');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    avatar: { margin: '10px' }
  };

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
        <Paper style={style.paper}>
          <Avatar style={style.avatar} image="https://avatars1.githubusercontent.com/u/6596471?v=3&s=400" />
          <Avatar style={style.avatar} image="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400" />
          <Avatar style={style.avatar} image="https://avatars2.githubusercontent.com/u/16486197?v=3&s=400" status="online" />
          <Avatar style={style.avatar} image="https://avatars1.githubusercontent.com/u/6596471?v=3&s=400" status="away" />
          <Avatar style={style.avatar} image="https://avatars0.githubusercontent.com/u/14125280?v=3&s=400" status="offline" />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default AvatarDoc;
