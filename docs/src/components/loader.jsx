import React from 'react';
import ReactMarkdown from 'react-markdown';
import Loader from 'anchor-ui/loader';
import { colors } from 'anchor-ui/settings';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

const usage = '```js\n import Loader from \'anchor-ui/loader\';';

function LoaderDoc() {
  const componentData = _.find(components, component => component.displayName === 'Loader');

  const style = {
    inverted: {
      padding: '10px',
      background: colors.theme,
      width: '75px',
      borderRadius: '3px',
      margin: '10px 0'
    }
  };

  return (
    <article className="doc">
      <h1>Loader</h1>
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
        <Loader />
        <section style={style.inverted}>
          <Loader inverted />
        </section>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default LoaderDoc;
