import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import AdminBadge from '../../../dist/admin-badge';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import AdminBadge from \'anchor-ui/admin-badge\';';

const AdminBadgeDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'AdminBadge');
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

  return (
    <article className="doc">
      <h1>AdminBadge</h1>
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
          <AdminBadge style={style.adminBadge} />
          <AdminBadge text="Custom Text" style={style.adminBadge} />
          <AdminBadge text="Inverted" style={style.adminBadge} inverted />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default AdminBadgeDoc;
