import React from 'react';
import { Message, UserList } from '../../dist/index';
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
      <Message message={{ body: 'hi', createdAt: new Date(), username: 'Sjaak' }} />
      <UserList users={[{ username: 'Sjaak' }, { username: 'Peter' }, { username: 'Lars' }, { username: 'Sven' }]} />
    </section>
  );
}

export default App;
