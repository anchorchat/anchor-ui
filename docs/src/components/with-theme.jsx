import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import WithTheme from '../../../dist/with-theme';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

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
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0 }}>
          <WithTheme color="#f2912c">
            <Button style={{ margin: '10px' }} onClick={() => {}}>Orange Button</Button>
          </WithTheme>
          <WithTheme color="#22ac55">
            <Button style={{ margin: '10px' }} onClick={() => {}}>Green Button</Button>
          </WithTheme>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default WithThemeDoc;
