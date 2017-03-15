import React from 'react';
import ReactMarkdown from 'react-markdown';
import MenuItem from 'anchor-ui/menu-item';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import PopOver from \'anchor-ui/icons\';';

function MenuItemDoc() {
  const componentData = _.find(components, component => component.displayName === 'MenuItem');
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
        <MenuItem text="Active Menu item" onClick={() => {}} active />
        <MenuItem text="Menu item" onClick={() => {}} />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default MenuItemDoc;
