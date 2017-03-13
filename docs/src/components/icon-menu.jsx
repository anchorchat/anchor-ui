import React from 'react';
import ReactMarkdown from 'react-markdown';
import IconMenu from 'anchor-ui/icons/icon-menu';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import IconMenu from \'anchor-ui/icons\';';

function IconMenuDoc() {
  const componentData = _.find(components, component => component.displayName === 'IconMenu');

  return (
    <article className="doc">
      <h1>Icon Menu</h1>
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
        <IconMenu />
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default IconMenuDoc;
