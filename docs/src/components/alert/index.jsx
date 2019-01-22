import React from 'react';
import find from 'lodash/find';
import noop from 'lodash/noop';
import Props from '../props';
import Alert from '../../anchor-ui/alert';
import components from '../../components.json';
import Paper from '../../anchor-ui/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'Alert' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '24px'
  },
  alert: { margin: '8px' }
};

const AlertDoc = () => (
  <article className="page">
    <h1>Alert</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <section>
      <h1>Examples</h1>
      <Markdown markdown={example} title="Code example" />
      <Paper style={style.paper}>
        <Alert style={style.alert} text="Success!" type="success" hideAlert={noop} onClick={noop} />
        <Alert style={style.alert} text="Info!" type="info" hideAlert={noop} onClick={noop} />
        <Alert style={style.alert} text="Warning!" type="warning" hideAlert={noop} onClick={noop} />
        <Alert style={style.alert} text="Error!" type="error" hideAlert={noop} onClick={noop} />
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default AlertDoc;
