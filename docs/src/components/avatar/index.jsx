import React from 'react';
import _ from 'lodash';
import Avatar from '../../../../dist/avatar';
import components from '../../../components.json';
import Props from '../props';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

const AvatarDoc = () => {
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
    <article className="page">
      <h1>Avatar</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Examples</h1>
        <Markdown markdown={example} title="Code example" />
        <Paper style={style.paper}>
          <Avatar style={style.avatar} image="https://avatars2.githubusercontent.com/u/3033357?s=120&v=4" />
          <Avatar style={style.avatar} image="https://avatars3.githubusercontent.com/u/10127707?s=120&v=4" />
          <Avatar style={style.avatar} image="https://avatars2.githubusercontent.com/u/16486197?v=3&s=120" status="online" />
          <Avatar style={style.avatar} image="https://avatars1.githubusercontent.com/u/6596471?v=3&s=120" status="away" />
          <Avatar style={style.avatar} image="https://avatars0.githubusercontent.com/u/14125280?v=3&s=120" status="offline" />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default AvatarDoc;
