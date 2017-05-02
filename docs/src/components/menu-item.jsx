import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import MenuItem from '../../../dist/menu-item';
import Props from './props';
import components from '../../components.json';
import IconReport from '../../../dist/icons/icon-report';
import Paper from '../../../dist/paper';

const usage = '```js\n import MenuItem from \'anchor-ui/menu-item\';';

function MenuItemDoc() {
  const componentData = _.find(components, component => component.displayName === 'MenuItem');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    }
  };

  return (
    <article className="doc">
      <h1>Menu Item</h1>
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
          <MenuItem text="Active Menu item" onClick={() => {}} active />
          <MenuItem text="Menu item" onClick={() => {}} />
          <MenuItem icon={<IconReport />} text="Menu item with icon" onClick={() => {}} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default MenuItemDoc;
