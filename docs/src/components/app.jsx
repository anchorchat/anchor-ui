import React from 'react';
import { Link } from 'react-router';

function App() {
  return (
    <main className="app">
      <h1>Docs</h1>
      <nav>
        <Link to="/alert">Alert</Link>
      </nav>
    </main>
  );
}

export default App;
