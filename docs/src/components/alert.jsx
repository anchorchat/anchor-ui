import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Props from './props';
import Alert from '../../../dist/alert';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Alert from \'anchor-ui/alert\';';

function AlertDoc() {
  const componentData = _.find(components, component => component.displayName === 'Alert');

  return (
    <article className="doc">
      <h1>Alert</h1>
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
        <Paper style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', margin: 0 }}>
          <Alert style={{ margin: '10px' }} text="Success!" type="success" hideAlert={() => {}} onClick={() => {}} />
          <Alert style={{ margin: '10px' }} text="Info!" type="info" hideAlert={() => {}} onClick={() => {}} />
          <Alert style={{ margin: '10px' }} text="Warning!" type="warning" hideAlert={() => {}} onClick={() => {}} />
          <Alert style={{ margin: '10px' }} text="Error!" type="error" hideAlert={() => {}} onClick={() => {}} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default AlertDoc;
