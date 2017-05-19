import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Divider from '../../../dist/divider';
import List from '../../../dist/list';
import ListItem from '../../../dist/list-item';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Divider from \'anchor-ui/divider\';';

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
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <List style={style.list}>
            <ListItem primaryText="ListItem" />
            <Divider text="Divider" />
            <ListItem primaryText="ListItem 2" />
          </List>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default DividerDoc;
