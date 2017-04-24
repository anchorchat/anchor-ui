import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Switch from '../../../dist/switch';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Switch from \'anchor-ui/switch\';';

function SwitchDoc() {
  const componentData = _.find(components, component => component.displayName === 'Switch');

  return (
    <article className="doc">
      <h1>Switch</h1>
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
          <Switch
          	toggleSwitch={() => {}}
            label="Inactive"
            style={{ margin: '10px' }}>
          </Switch>
          <Switch 
          	toggleSwitch={() => {}}
            label="Active"
            style={{ margin: '10px' }}
          	active>
          </Switch>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default SwitchDoc;