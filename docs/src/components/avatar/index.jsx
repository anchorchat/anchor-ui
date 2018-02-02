import React from 'react';
import _ from 'lodash';
import faker from 'faker';
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
          <Avatar style={style.avatar} image={faker.internet.avatar()} />
          <Avatar style={style.avatar} image={faker.internet.avatar()} />
          <Avatar style={style.avatar} image={faker.internet.avatar()} status="online" />
          <Avatar style={style.avatar} image={faker.internet.avatar()} status="away" />
          <Avatar style={style.avatar} image={faker.internet.avatar()} status="offline" />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default AvatarDoc;
