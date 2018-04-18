import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import noop from 'lodash/noop';
import ThemeProvider from '../../../dist/theme-provider';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import colors from '../../../dist/settings/colors';
import Markdown from './markdown';

const usage = `
  \`\`\`jsx
  import ThemeProvider from 'anchor-ui/theme-provider';

  const App = () => (
    <section>
      <ThemeProvider color="#f2912c">
        <Button>Orange Button</Button>
      </ThemeProvider>
      <ThemeProvider color="#22ac55">
        <Button>Green Button</Button>
      </ThemeProvider>
    </section>
  );
  \`\`\`
`;

const componentData = find(components, { displayName: 'ThemeProvider' });
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

const ThemeProviderDoc = ({ setColor }) => (
  <article className="page">
    <h1>ThemeProvider</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
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
    <Props props={componentData.props} componentName="ThemeProvider" />
  </article>
);

ThemeProviderDoc.propTypes = {
  setColor: PropTypes.func
};

ThemeProviderDoc.defaultProps = {
  setColor: noop
};

export default ThemeProviderDoc;
