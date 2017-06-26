import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import npmPackage from '../../../package.json';

const install = '```bash\n $ npm i -S anchor-ui';
const font = '```css\n * {\n  font-family: \'Lato\', sans-serif;\n }';
const named = '```js\n import { AppHeader, Button } from \'anchor-ui\';';
const defaultImport = '```js\n import AppHeader from \'anchor-ui/app-header\'; \n import Button from \'anchor-ui/button\';';
const theme = '```js\n import ThemeProvider from \'anchor-ui/theme-provider\'; \n <ThemeProvider color="#1ba6c4"><YourComponent /></ThemeProvider>;';

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
    <article className="home">
      <h1>UI kit for chat engines made with React</h1>
      <section>
        <p>
          This set of components is used at Anchor.Chat
          for building all sorts of chat based applications.
        </p>
      </section>
      <section>
        <h1>Getting started</h1>
        <h2>Install from npm</h2>
        <ReactMarkdown source={install} className="markdown" />
        <h2>Font</h2>
        <p>
          Anchor UI is designed with <a href="https://fonts.google.com/specimen/Lato" target="_blank" rel="noopener noreferrer">Lato</a> but you can also supply your own font with CSS.
        </p>
        <ReactMarkdown source={font} className="markdown" />
        <h2>Usage</h2>
        <p>Import using named import</p>
        <ReactMarkdown source={named} className="markdown" />
        <p>Or use default import</p>
        <ReactMarkdown source={defaultImport} className="markdown" />
        <h2>Theme</h2>
        <p>
          Add your own color to the components, color is applied with props. <br />
          Wrap ThemeProvider around components you want your theme color in.
        </p>
        <ReactMarkdown source={theme} className="markdown" />
        <h2>StyleRoot</h2>
        <p>If you want to use inline Media Queries or inline CSS animations you need to wrap your app in <a style={style.link} href="https://github.com/FormidableLabs/radium/tree/master/docs/api#styleroot-component" target="_blank" rel="noopener noreferrer">Radium&apos;s StyleRoot</a> component</p>
        <h2>Dependencies</h2>
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
        <h2>Peer Dependencies</h2>
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
