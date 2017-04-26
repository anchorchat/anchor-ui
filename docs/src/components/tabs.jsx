import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Tab from '../../../dist/tab';
import Tabs from '../../../dist/tabs';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Tabs from \'anchor-ui/tabs\';';

function TabsDoc() {
  const componentData = _.find(components, component => component.displayName === 'Tabs');

  return (
    <article className="doc">
      <h1>Tabs</h1>
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
          <Tabs style={{ margin: '10px' }}>
            <Tab label="Tab 1">Content 1</Tab>
            <Tab label="Tab 2">Content 2</Tab>
            <Tab label="Tab 3">Content 3</Tab>
          </Tabs>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default TabsDoc;
