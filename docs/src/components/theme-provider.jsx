import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import ThemeProvider from '../../../dist/theme-provider';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import ThemeProvider from \'anchor-ui/icons\';';

class ThemeProviderDoc extends Component {
  constructor() {
    super();

    this.state = {
      color: 'orange'
    };
  }

  setColor = () => {
    this.setState({ color: 'purple' });
  }

  render() {
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
          <Paper style={style.paper}>
            <ThemeProvider color={this.state.color}>
              <Button style={style.button} onClick={() => {}}>Orange Button</Button>
            </ThemeProvider>
            <ThemeProvider color="#22ac55">
              <Button style={style.button} onClick={this.setColor}>Green Button</Button>
            </ThemeProvider>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

// function ThemeProviderDoc() {
//   const componentData = _.find(components, component => component.displayName === 'ThemeProvider');
//   const style = {
//     paper: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       alignItems: 'center',
//       margin: 0,
//       padding: '20px'
//     },
//     button: { margin: '10px' }
//   };
//   return (
//     <article className="doc">
//       <h1>With Theme</h1>
//       <section>
//         <h1>Description</h1>
//         <p>{componentData.description}</p>
//       </section>
//       <section>
//         <h1>Usage</h1>
//         <ReactMarkdown source={usage} className="markdown" />
//       </section>
//       <section>
//         <h1>Examples</h1>
//         <Paper style={style.paper}>
//           <ThemeProvider color="#f2912c">
//             <Button style={style.button} onClick={() => {}}>Orange Button</Button>
//           </ThemeProvider>
//           <ThemeProvider color="#22ac55">
//             <Button style={style.button} onClick={() => {}}>Green Button</Button>
//           </ThemeProvider>
//         </Paper>
//       </section>
//       <Props props={componentData.props} />
//     </article>
//   );
// }

export default ThemeProviderDoc;
