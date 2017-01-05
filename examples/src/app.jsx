import React, { Component } from 'react';
import {
  MessageInput,
  ChannelHeader,
  MyProfileCard,
  List,
  ListItem,
  Message,
  colors
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
  {
    body: 'Stop talking, brain thinking. Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.',
    createdAt: new Date(),
    username: 'The Doctor'
  },
  {
    body: 'You\'ve swallowed a planet! They\'re not aliens, they\'re Earth…liens!',
    createdAt: new Date(),
    username: 'Amy'
  },
  {
    body: 'You hit me with a cricket bat. I\'m nobody\'s taxi service; I\'m not gonna be there to catch you every time you feel like jumping out of a spaceship. Sorry, checking all the water in this area; there\'s an escaped fish.',
    createdAt: new Date(),
    username: 'The Doctor'
  }
];

const currentUser = 'The Doctor';

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
    const listStyle = {
      list: {
        overflow: 'auto',
        background: colors.background,
        padding: '10px'
      }
    };

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
        <List style={listStyle}>
          {messages.map((message, index) => (
            <Message
              message={message} key={`message-${index}`}
              myMessage={message.username === currentUser}
            />
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
