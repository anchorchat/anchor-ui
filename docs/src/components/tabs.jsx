import React from 'react';
import find from 'lodash/find';
import Tab from '../anchor-ui/tab';
import Tabs from '../anchor-ui/tabs';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`jsx
  import Tabs from 'anchor-ui/tabs';
  import Tab from 'anchor-ui/tab';

  const MyTabs = () => (
    <Tabs>
      <Tab label="Tab 1">Content 1</Tab>
      <Tab label="Tab 2">Content 2</Tab>
      <Tab label="Tab 3">Content 3</Tab>
    </Tabs>
  );
  \`\`\`
`;

const componentData = find(components, { displayName: 'Tabs' });
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

const TabsDoc = () => (
  <article className="page">
    <h1>Tabs</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Examples</h1>
      <Paper style={style.paper}>
        <Tabs
          style={style.tabs}
          onTabChange={(event, index) => console.log('on tab change callback fired! clicked tab => ', index)} // eslint-disable-line max-len
        >
          <Tab label="Tab 1">Content 1</Tab>
          <Tab label="Tab 2">Content 2</Tab>
          <Tab label="Tab 3">Content 3</Tab>
        </Tabs>
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default TabsDoc;
