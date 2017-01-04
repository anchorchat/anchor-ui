import React, { Component } from 'react';
import { ChannelList, UserList, MessageInput, Messages } from '../../dist/index';
import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };

    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage(event) {
    this.setState({
      message: event.currentTarget.value
    });
  }

  render() {
    const channels = [
      {
        name: 'Channel1',
        maxUsers: 50,
        users: ['1', '2', '3']
      },
      {
        name: 'Channel2',
        maxUsers: 50,
        users: ['1', '2', '3']
      },
      {
        name: 'Channel3',
        maxUsers: 50,
        users: ['1', '2', '3']
      },
      {
        name: 'Channel4',
        maxUsers: 50,
        users: ['1', '2', '3']
      }
    ];

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
        <Messages messages={[{ body: 'hi', createdAt: new Date(), username: 'Sjaak' }, { body: 'hi', createdAt: new Date(), username: 'Sven' }]} />
        <UserList users={[{ username: 'Sjaak' }, { username: 'Peter' }, { username: 'Lars' }, { username: 'Sven' }]} />
        <ChannelList channels={channels} />
        <MessageInput onChange={this.changeMessage} value={this.state.message} />
      </section>
    );
  }
}

export default App;
