import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import ThemeProvider from '../../../dist/theme-provider';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import colors from '../../../dist/settings/colors';

const usage = '```js\n import ThemeProvider from \'anchor-ui/theme-provider\';';

const ThemeProviderDoc = ({ setColor }) => {
  const componentData = _.find(components, component => component.displayName === 'ThemeProvider');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    button: { margin: '10px' }
  };
  return (
    <article className="doc">
      <h1>ThemeProvider</h1>
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
        <h2>Click one of the buttons to change the app&apos;s theme</h2>
        <Paper style={style.paper}>
          <ThemeProvider color="#f2912c">
            <Button style={style.button} onClick={() => setColor('#f2912c')}>Orange Button</Button>
          </ThemeProvider>
          <ThemeProvider color="#22ac55">
            <Button style={style.button} onClick={() => setColor('#22ac55')}>Green Button</Button>
          </ThemeProvider>
          <ThemeProvider color={colors.theme}>
            <Button style={style.button} onClick={() => setColor(colors.theme)}>
              Default Color Button
            </Button>
          </ThemeProvider>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

ThemeProviderDoc.propTypes = {
  setColor: PropTypes.func
};

ThemeProviderDoc.defaultProps = {
  setColor: () => {}
};

export default ThemeProviderDoc;
