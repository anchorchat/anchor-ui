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
  IconEmoji,
  AppHeader,
  IconPower
} from '../../dist/index';
import './app.css';
import theDoctor from './assets/images/the_doctor.jpg';
import dalek from './assets/images/dalek.jpg';
import emptyStateBackground from './assets/images/empty_state_users.jpg';
import logo from './assets/images/logo.svg';

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
  },
  {
    body: ':whale2:',
    createdAt: new Date(),
    username: 'Dalek',
    profileImage: dalek
  },
];

const currentUser = 'The Doctor';
const currentChannel = 'Channel2';

const emptyState = {
  header: 'Empty state',
  body: 'You have stumbled upon an empty state my good sir.',
  background: emptyStateBackground
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

  componentDidMount() {
    this.scrollDown();
  }

  scrollDown() {
    setTimeout(() => {
      const node = this.node;
      node.scrollTop = node.scrollHeight;
    }, 100);
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

    this.scrollDown();

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

    const logoStyle = {
      float: 'left',
      height: '100%',
      marginRight: '16px'
    };

    const rightButtonStyle = {
      position: 'absolute',
      top: '8px',
      right: '16px'
    };

    return (
      <section className="demo">
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
          icon={<img src={logo} alt="Anchor Chat" style={logoStyle} />}
          rightButton={
            <Button onClick={() => {}} iconButton style={rightButtonStyle}>
              <IconPower color={colors.white} />
            </Button>
          }
        />
        <article>
          <ProfileCard username={currentUser} avatar={theDoctor} style={{ borderRight: `1px solid ${colors.grey}` }} />
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
          <List listRef={node => (this.node = node)} style={listStyle}>
            {this.state.messages.map((message, index) => (
              <Message
                message={message} key={`message-${index}`}
                myMessage={message.username === currentUser}
                avatar={message.profileImage}
                emoji
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
