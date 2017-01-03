import React from 'react';
import { Component, Message } from '../../dist/index';
import './app.css';

function App() {
  return (
    <section className="demo">
      <h1>
        <a
          href="https://github.com/anchorchat/anchor-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anchor UI
        </a>
      </h1>
      <Component />
      <Message message={{ body: 'hi' }} />
    </section>
  );
}

export default App;
