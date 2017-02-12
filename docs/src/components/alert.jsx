import React from 'react';
import ReactMarkdown from 'react-markdown';
import Alert from 'anchor-ui/alert';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

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
        <Alert text="Success!" type="success" hideAlert={() => {}} onClick={() => {}} />
        <Alert text="Info!" type="info" hideAlert={() => {}} onClick={() => {}} />
        <Alert text="Warning!" type="warning" hideAlert={() => {}} onClick={() => {}} />
        <Alert text="Error!" type="error" hideAlert={() => {}} onClick={() => {}} />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default AlertDoc;
