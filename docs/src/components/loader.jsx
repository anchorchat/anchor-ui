import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Loader from '../../../dist/loader';
import colors from '../../../dist/settings/colors';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Loader from \'anchor-ui/loader\';';

function LoaderDoc() {
  const componentData = _.find(components, component => component.displayName === 'Loader');

  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    inverted: {
      padding: '10px',
      background: colors.theme,
      width: '75px',
      borderRadius: '3px',
      margin: '10px'
    },
    loader: { margin: '10px' }
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
        <Paper style={style.paper}>
          <Loader style={style.loader} />
          <section style={style.inverted}>
            <Loader inverted />
          </section>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default LoaderDoc;
