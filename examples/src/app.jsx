import React, { Component } from 'react';
import {
  MessageInput,
  Messages,
  ChannelHeader,
  MyProfileCard,
  List,
  ListItem
} from '../../dist/index';
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

    const users = [
      { username: 'Sjaak' },
      { username: 'Peter' },
      { username: 'Lars' },
      { username: 'Sven' },
      { username: 'Ian' }
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
        <MyProfileCard username="Ian" />
        <ChannelHeader name="Channel 1" />
        <Messages messages={[{ body: 'hi', createdAt: new Date(), username: 'Sjaak' }, { body: 'hi', createdAt: new Date(), username: 'Sven' }]} />
        <List>
          {channels.map(channel => (
            <ListItem
              key={`channel-list-${channel.name}`}
              primaryText={channel.name}
              secondaryText={`${channel.users.length}/${channel.maxUsers}`}
            />
          ))}
        </List>
        <List>
          {users.map(user => (
            <ListItem
              key={`user-list-${user.username}`}
              primaryText={user.username}
            />
          ))}
        </List>
        <MessageInput onChange={this.changeMessage} value={this.state.message} />
      </section>
    );
  }
}

export default App;
