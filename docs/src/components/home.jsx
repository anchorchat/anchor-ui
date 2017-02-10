import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import npmPackage from '../../../package.json';

const install = `
  $ npm i -S anchor-ui
`;

function Home() {
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
        <h3>Dependencies</h3>
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
        <h3>Peer Dependencies</h3>
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
}

export default Home;
