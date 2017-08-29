import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import Tab from '../../../dist/tab';
import Tabs from '../../../dist/tabs';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Tabs from \'anchor-ui/tabs\';';

const TabsDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Tabs');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    tabs: { margin: '10px' }
  };

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
        <Paper style={style.paper}>
          <Tabs style={style.tabs}>
            <Tab label="Tab 1">Content 1</Tab>
            <Tab label="Tab 2">Content 2</Tab>
            <Tab label="Tab 3">Content 3</Tab>
          </Tabs>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default TabsDoc;
