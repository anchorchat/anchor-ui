import React, { PropTypes } from 'react';
import { AppHeader } from 'anchor-ui';
import Menu from './menu';
import logo from '../assets/images/logo.svg';

function App({ children }) {
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
      <article>
        <Menu />
        {children}
      </article>
    </main>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
