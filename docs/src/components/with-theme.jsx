import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import WithTheme from '../../../dist/with-theme';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Alert from '../../../dist/alert';

const usage = '```js\n import WithTheme from \'anchor-ui/with-theme\';';

function WithThemeDoc() {
  const componentData = _.find(components, component => component.displayName === 'WithTheme');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    button: {
      margin: '10px'
    },
    alert: {
      maxWidth: '100%'
    }
  };
  return (
    <article className="doc">
      <Alert style={style.alert} text="Warning! This component is deprecated and will be removed in the next major version!" type="warning" hideAlert={() => {}} onClick={() => {}} />
      <h1>WithTheme</h1>
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
          <WithTheme color="#f2912c">
            <Button style={style.button} onClick={() => {}}>Orange Button</Button>
          </WithTheme>
          <WithTheme color="#22ac55">
            <Button style={style.button} onClick={() => {}}>Green Button</Button>
          </WithTheme>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default WithThemeDoc;
