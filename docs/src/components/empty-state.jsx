import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import EmptyState from '../../../dist/empty-state';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import emptyStateBackground from '../assets/images/empty_state_users.jpg';
import Paper from '../../../dist/paper';

const usage = '```js\n import EmptyState from \'anchor-ui/empty-state\';';

function EmptyStateDoc() {
  const componentData = _.find(components, component => component.displayName === 'EmptyState');

  const emptyState = {
    header: 'Empty state',
    body: 'You have stumbled upon an empty state my good sir.',
    background: emptyStateBackground
  };
  return (
    <article className="doc">
      <h1>EmptyState</h1>
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
        <Paper style={{ margin: 0, padding: '20px' }}>
          <EmptyState
            background={emptyState.background}
            headerText={emptyState.header}
            bodyText={emptyState.body}
            button={<Button onClick={() => {}}><p>Click me</p></Button>}
            style={{ width: '275px', height: '600px' }}
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default EmptyStateDoc;
