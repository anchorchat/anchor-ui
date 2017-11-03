import React from 'react';
import _ from 'lodash';
import Props from './props';
import Alert from '../../../dist/alert';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Alert from 'anchor-ui/alert';
  \`\`\`
`;

const AlertDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Alert');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    alert: { margin: '10px' }
  };

  return (
    <article className="page">
      <h1>Alert</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <Markdown markdown={usage} title="Code example" />
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <Alert style={style.alert} text="Success!" type="success" hideAlert={() => {}} onClick={() => {}} />
          <Alert style={style.alert} text="Info!" type="info" hideAlert={() => {}} onClick={() => {}} />
          <Alert style={style.alert} text="Warning!" type="warning" hideAlert={() => {}} onClick={() => {}} />
          <Alert style={style.alert} text="Error!" type="error" hideAlert={() => {}} onClick={() => {}} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default AlertDoc;
