import React from 'react';
import _ from 'lodash';
import Divider from '../../../dist/divider';
import List from '../../../dist/list';
import ListItem from '../../../dist/list-item';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Divider from 'anchor-ui/divider';
  \`\`\`
`;

const DividerDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Divider');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    list: { margin: '10px' }
  };

  return (
    <article className="doc">
      <h1>Divider</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <Markdown markdown={usage} title="Code example" />
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <List style={style.list}>
            <ListItem primaryText="ListItem" />
            <Divider />
            <ListItem primaryText="ListItem 2" />
            <Divider text="Divider with text" />
            <ListItem primaryText="ListItem 3" />
          </List>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default DividerDoc;
