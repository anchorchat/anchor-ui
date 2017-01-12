import React, { Component } from 'react';
import {
  MessageInput,
  ChannelHeader,
  ProfileCard,
  List,
  ListItem,
  Message,
  EmptyState,
  colors,
  Button,
  IconClose,
  IconEmoji
} from '../../dist/index';
import './app.css';
import theDoctor from './assets/images/the_doctor.jpg';
import dalek from './assets/images/dalek.jpg';
import emptyBackground from './assets/images/empty_state_users.jpg';

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

const messages = [
  {
    body: 'Stop talking, brain thinking. Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor
  },
  {
    body: 'Daleks have no concept of elegance.',
    createdAt: new Date(),
    username: 'Dalek',
    profileImage: dalek
  },
  {
    body: 'You hit me with a cricket bat. I\'m nobody\'s taxi service; I\'m not gonna be there to catch you every time you feel like jumping out of a spaceship. Sorry, checking all the water in this area; there\'s an escaped fish.',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor
  }
];

const currentUser = 'The Doctor';
const currentChannel = 'Channel2';

const emptyState = {
  header: 'Empty state',
  body: 'You have stumbled upon an empty state my good sir.',
  background: emptyBackground
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: '',
      messages
    };

    this.changeMessage = this.changeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  changeMessage(event) {
    this.setState({
      message: event.currentTarget.value
    });
  }

  sendMessage() {
    const { message } = this.state;

    if (message.length < 1) {
      return false;
    }

    const newMessages = this.state.messages;

    newMessages.push({
      body: message,
      createdAt: new Date(),
      username: currentUser,
      profileImage: theDoctor
    });

    this.setState({
      messages: newMessages,
      message: ''
    });

    return false;
  }

  render() {
    const listStyle = {
      overflow: 'auto',
      background: colors.background,
      padding: '16px',
      height: 'calc(100% - 112px)'
    };

    const channelListStyle = {
      height: 'calc(100% - 116px)',
      borderRight: `1px solid ${colors.grey}`
    };

    const userListStyle = {
      height: '100%',
      borderLeft: `1px solid ${colors.grey}`
    };

    const buttonStyle = {
      position: 'absolute',
      top: '6px',
      right: '6px'
    };

    const leftButtonStyle = {
      position: 'absolute',
      left: '20px',
      top: '4px'
    };

    const listItemStyle = {
      paddingRight: '52px'
    };

    const inputStyle = {
      paddingLeft: '48px'
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
        <article>
          <ProfileCard username={currentUser} avatar={theDoctor} />
          <List style={channelListStyle}>
            {channels.map(channel => (
              <ListItem
                key={`channel-list-${channel.name}`}
                primaryText={channel.name}
                secondaryText={`${channel.users.length}/${channel.maxUsers}`}
                active={currentChannel === channel.name}
                rightButton={
                  currentChannel === channel.name
                  ? <Button style={buttonStyle} iconButton onClick={() => {}}>
                    <IconClose color={colors.white} />
                  </Button>
                  : null
                }
                style={listItemStyle}
              />
            ))}
          </List>
        </article>
        <article>
          <ChannelHeader name={currentChannel} />
          <List style={listStyle}>
            {this.state.messages.map((message, index) => (
              <Message
                message={message} key={`message-${index}`}
                myMessage={message.username === currentUser}
                avatar={message.profileImage}
              />
            ))}
          </List>
          <MessageInput
            onChange={this.changeMessage}
            placeholder="Type something..."
            value={this.state.message}
            sendMessage={this.sendMessage}
            leftButton={
              <Button style={leftButtonStyle} iconButton onClick={() => {}}>
                <IconEmoji />
              </Button>
            }
            inputStyle={inputStyle}
          />
        </article>
        <article>
          <EmptyState
            style={userListStyle}
            background={emptyState.background}
            headerText={emptyState.header}
            bodyText={emptyState.body}
            button={<Button onClick={() => {}}><p>Click me</p></Button>}
          />
        </article>
      </section>
    );
  }
}

export default App;
