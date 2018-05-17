import React from 'react';
import find from 'lodash/find';
import Badge from '../../../../dist/badge';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'Badge' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  badge: { margin: '10px' }
};

const BadgeDoc = () => (
  <article className="page">
    <h1>Badge</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <Badge style={style.badge} value={9} maxValue={9} />
        <Badge style={style.badge} value={10} maxValue={9} />
        <Badge style={style.badge} value={10} maxValue={9} inverted />
        <Badge style={style.badge} value={100} />
        <Badge style={style.badge} value={100} maxValue={99} />
        <Badge style={style.badge} value={1000} />
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default BadgeDoc;
