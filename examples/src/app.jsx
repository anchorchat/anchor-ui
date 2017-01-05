import React, { Component } from 'react';
import {
  MessageInput,
  ChannelHeader,
  MyProfileCard,
  List,
  ListItem,
  Message
} from '../../dist/index';
import './app.css';

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

const messages = [
  { body: 'hi', createdAt: new Date(), username: 'Sjaak' },
  { body: 'hi', createdAt: new Date(), username: 'Sven' }
];

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
        <List>
          {messages.map(message => (
            <Message message={message} key={`message-${message.username}`} />
          ))}
        </List>
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
        <MessageInput onChange={this.changeMessage} placeholder="Type something..." value={this.state.message} />
      </section>
    );
  }
}

export default App;
