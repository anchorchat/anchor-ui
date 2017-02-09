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
          for creating all sorts of chat based applications.
        </p>
      </section>
      <section>
        <h1>Getting started</h1>
        <h2>Install from npm</h2>
        <ReactMarkdown source={install} className="markdown" />
        <h3>Dependencies</h3>
        {_.map(npmPackage.dependencies, (version, name) => (
          <p key={name}>{`${name}: ${version}`}</p>
        ))}
        <h3>Peer Dependencies</h3>
        {_.map(npmPackage.peerDependencies, (version, name) => (
          <p key={name}>{`${name}: ${version}`}</p>
        ))}
      </section>
    </article>
  );
}

export default Home;
