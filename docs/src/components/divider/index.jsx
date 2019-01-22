import React from 'react';
import find from 'lodash/find';
import Divider from '../../anchor-ui/divider';
import List from '../../anchor-ui/list';
import ListItem from '../../anchor-ui/list-item';
import Props from '../props';
import components from '../../components.json';
import Paper from '../../anchor-ui/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'Divider' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  list: { margin: '10px' }
};

const DividerDoc = () => (
  <article className="page">
    <h1>Divider</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <List>
          <ListItem primaryText="ListItem" />
          <Divider />
          <ListItem primaryText="ListItem 2" />
          <Divider text="Divider with text" />
          <ListItem primaryText="ListItem 3" />
        </List>
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default DividerDoc;
