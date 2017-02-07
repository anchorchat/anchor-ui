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
          <li><Link to="/app-header">App-Header</Link></li>
        </ul>
      </nav>
    </main>
  );
}

export default App;
