import React from 'react';
import ReactMarkdown from 'react-markdown';
import WithTheme from 'anchor-ui/with-theme';
import Button from 'anchor-ui/button';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import WithTheme from \'anchor-ui/icons\';';

function WithThemeDoc() {
  const componentData = _.find(components, component => component.displayName === 'WithTheme');
  return (
    <article className="doc">
      <h1>With Theme</h1>
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
        <WithTheme color="#f2912c">
          <Button onClick={() => {}}><p>With theme</p></Button>
        </WithTheme>
        <WithTheme color="#22ac55">
          <Button onClick={() => {}}><p>With theme</p></Button>
        </WithTheme>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default WithThemeDoc;
