import React from 'react';
import find from 'lodash/find';
import Loader from '../anchor-ui/loader';
import colors from '../anchor-ui/settings/colors';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Alert from '../anchor-ui/alert';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Loader from 'anchor-ui/loader';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Loader' });

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
  loader: {
    margin: '10px'
  },
  alert: {
    maxWidth: '100%'
  },
  link: {
    color: 'inherit',
    textDecoration: 'underline',
    fontWeight: 'normal'
  }
};

const LoaderDoc = () => (
  <article className="page">
    <h1>Loader</h1>
    <Alert
      style={style.alert}
      text={(
        <span>
          Warning! This component uses CSS animations and requires your app to be wrapped in&nbsp;
          <a style={style.link} href="https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component" target="_blank" rel="noopener noreferrer">Radium&apos;s StyleRoot</a> component! {/* eslint-disable-line max-len */}
        </span>
      )}
      type="warning"
    />
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
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

export default LoaderDoc;
