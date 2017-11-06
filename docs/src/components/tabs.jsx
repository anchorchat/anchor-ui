import React from 'react';
import _ from 'lodash';
import Tab from '../../../dist/tab';
import Tabs from '../../../dist/tabs';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
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
          <Tabs style={style.tabs} onTabChange={(event, index) => console.log('on tab change callback fired! clicked tab => ', index)}>
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
