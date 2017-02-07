import React from 'react';
import { Link } from 'react-router';

function App() {
  return (
    <main className="app">
      <h1>Docs</h1>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/alert">Alert</Link></li>
          <li><Link to="/app-header">App Header</Link></li>
          <li><Link to="/avatar">Avatar</Link></li>
          <li><Link to="/badge">Badge</Link></li>
          <li><Link to="/button">Button</Link></li>
          <li><Link to="/channel-header">Channel Header</Link></li>
          <li><Link to="/dialog">Dialog</Link></li>
          <li><Link to="/empty-state">Empty State</Link></li>
          <li><Link to="/input">Input</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/list-item">List-item</Link></li>
          <li><Link to="/loader">Loader</Link></li>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/message-input">Message-input</Link></li>
          <li><Link to="/profile-card">Profile card</Link></li>
        </ul>
      </nav>
    </main>
  );
}

export default App;
