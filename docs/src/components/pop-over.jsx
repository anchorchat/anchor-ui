import React from 'react';
import ReactMarkdown from 'react-markdown';
import PopOver from 'anchor-ui/pop-over';
import MenuItem from 'anchor-ui/menu-item';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import SearchBox from \'anchor-ui/search-box\';';

function PopOverDoc() {
  const componentData = _.find(components, component => component.displayName === 'PopOver');
  return (
    <article className="doc">
      <h1>Pop Over</h1>
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
        {/* TODO: make popOver visible */}
        <PopOver popOverRef={() => {}} >
          <MenuItem text="Active Menu item" onClick={() => {}} active />
          <MenuItem text="Menu item" onClick={() => {}} />
        </PopOver>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default PopOverDoc;
