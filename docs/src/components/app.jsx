import React from 'react';
import { AppHeader } from 'anchor-ui';
import Menu from './menu';
import logo from '../assets/images/logo.svg';

function App() {
  return (
    <main className="app">
      <AppHeader
        text={
          <a
            href="https://github.com/anchorchat/anchor-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anchor UI
          </a>
        }
        icon={<img src={logo} alt="Anchor Chat" />}
      />
      <Menu />
    </main>
  );
}

export default App;
