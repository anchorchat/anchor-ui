import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import IconEmoji from '../../../dist/icons/icon-emoji';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import Button from \'anchor-ui/button\';';

function ButtonDoc() {
  const componentData = _.find(components, component => component.displayName === 'Button');

  return (
    <article className="doc">
      <h1>Button</h1>
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
        <Button onClick={() => {}}><p>Click me</p></Button>
        <Button iconButton onClick={() => {}}>
          <IconEmoji />
        </Button>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default ButtonDoc;
