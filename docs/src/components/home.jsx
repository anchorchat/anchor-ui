import React from 'react';
import _ from 'lodash';
import npmPackage from '../../../package.json';
import Markdown from './markdown';

const install = `
  \`\`\`bash
  $ npm i -S anchor-ui;
  \`\`\`
`;
const font = `
  \`\`\`css
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400');

  * {
    font-family: 'Lato', sans-serif;
  }
  \`\`\`
`;
const named = `
  \`\`\`js
  import { AppHeader, Button } from 'anchor-ui';
  \`\`\`
`;
const defaultImport = `
  \`\`\`js
  import AppHeader from 'anchor-ui/app-header';
  import Button from 'anchor-ui/button';
  \`\`\`
`;
const theme = `
  \`\`\`jsx
  import ThemeProvider from 'anchor-ui/theme-provider';
  import YourComponent from './your-component';

  const App = () => (
    <ThemeProvider color="#1ba6c4">
      <YourComponent />
    </ThemeProvider>
  );

  export default App;
  \`\`\`
`;

const Home = () => {
  const style = {
    alert: {
      maxWidth: '100%',
      marginTop: '16px'
    },
    link: {
      textDecoration: 'underline',
      fontWeight: 'normal'
    }
  };

  return (
    <article className="page home">
      <h1>UI kit for chat engines made with React</h1>
      <section>
        <p>
          This set of components is used at Anchor.Chat
          for building all sorts of chat based applications.
        </p>
      </section>
      <section>
        <h1>Getting started</h1>
        <Markdown markdown={install} title="Install from npm" />
      </section>
      <section>
        <h1>Font</h1>
        <p>
          Anchor UI is designed with <a href="https://fonts.google.com/specimen/Lato" target="_blank" rel="noopener noreferrer">Lato</a> but you can also supply your own font with CSS.
        </p>
        <Markdown markdown={font} title="Install Lato" />
      </section>
      <section>
        <h1>Usage</h1>
        <Markdown markdown={named} title="Import using named import" />
        <Markdown markdown={defaultImport} title="Or use default import" />
      </section>
      <section>
        <h1>Theme</h1>
        <p>
          Add your own color to the components, color is applied with props. <br />
          Wrap ThemeProvider around components you want your theme color in.
        </p>
        <Markdown markdown={theme} title="Code example" />
      </section>
      <section>
        <h2>StyleRoot</h2>
        <p>If you want to use inline Media Queries or inline CSS animations you need to wrap your app in <a style={style.link} href="https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component" target="_blank" rel="noopener noreferrer">Radium&apos;s StyleRoot</a> component</p>
      </section>
      <section>
        <h1>Dependencies</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {_.map(npmPackage.dependencies, (version, name) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section>
        <h1>Peer Dependencies</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {_.map(npmPackage.peerDependencies, (version, name) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  );
};

export default Home;
