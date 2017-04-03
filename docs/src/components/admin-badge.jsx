import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import AdminBadge from '../../../dist/admin-badge';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import AdminBadge from \'anchor-ui/admin-badge\';';

function AdminBadgeDoc() {
  const componentData = _.find(components, component => component.displayName === 'AdminBadge');

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
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0 }}>
          <AdminBadge style={{ margin: '10px' }} inverted />
          <AdminBadge style={{ margin: '10px' }} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default AdminBadgeDoc;
