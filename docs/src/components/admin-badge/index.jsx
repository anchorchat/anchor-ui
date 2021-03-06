import React from 'react';
import find from 'lodash/find';
import AdminBadge from '../../anchor-ui/admin-badge';
import Props from '../props';
import components from '../../components.json';
import Paper from '../../anchor-ui/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'AdminBadge' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  adminBadge: { margin: '10px' }
};

const AdminBadgeDoc = () => (
  <article className="page">
    <h1>AdminBadge</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <AdminBadge style={style.adminBadge} />
        <AdminBadge text="Custom Text" style={style.adminBadge} />
        <AdminBadge text="Inverted" style={style.adminBadge} inverted />
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default AdminBadgeDoc;
