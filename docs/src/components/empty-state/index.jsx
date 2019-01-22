import React from 'react';
import find from 'lodash/find';
import EmptyState from '../../anchor-ui/empty-state';
import Button from '../../anchor-ui/button';
import Props from '../props';
import components from '../../components.json';
import background from '../../assets/images/empty_state_users.jpg';
import Paper from '../../anchor-ui/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'EmptyState' });

const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  },
  emptyState: {
    width: '275px',
    height: '600px',
    margin: '10px'
  }
};

const EmptyStateDoc = () => (
  <article className="page">
    <h1>EmptyState</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <EmptyState
          background={background}
          headerText="Empty state"
          bodyText="You have stumbled upon an empty state my good sir."
          button={<Button><p>Click me</p></Button>}
          style={style.emptyState}
        />
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default EmptyStateDoc;
