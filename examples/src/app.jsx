import React, { Component } from 'react';
import {
  MessageInput,
  ChannelHeader,
  ProfileCard,
  List,
  ListItem,
  Message,
  EmptyState,
  Button,
  AppHeader,
  Badge,
  MessageList,
  IconMenu,
  MenuItem
} from '../../dist';
import { IconClose, IconEmoji, IconExit, IconPeople, IconChannels, ChannelAvatar } from '../../dist/icons';
import { colors } from '../../dist/settings';
import './app.css';
import theDoctor from './assets/images/the_doctor.jpg';
import dalek from './assets/images/dalek.jpg';
import emptyStateBackground from './assets/images/empty_state_users.jpg';
import logo from './assets/images/logo.svg';
import channelBackground from './assets/images/channel-background.jpg';

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
    body: 'This is a small message',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor
  },
  {
    body: 'This is a medium message',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor,
    fontSize: 'medium',
  },
  {
    body: 'This is a large message',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor,
    fontSize: 'large',
  },
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

    this.messageList.scrollDown();

    return false;
  }

  render() {
    const channelListStyle = {
      height: 'calc(100% - 116px)',
      borderRight: `1px solid ${colors.grey}`
    };

    const userListStyle = {
      borderLeft: `1px solid ${colors.grey}`
    };

    const channelStyle = {
      backgroundImage: `url(${channelBackground})`,
      backgroundSize: '500px'
    };

    return (
      <section className="demo">
        <AppHeader
          text={
            <a
              href="https://github.com/anchorchat/anchor-ui"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.white, textDecoration: 'none' }}
            >
              Anchor UI
            </a>
          }
          icon={<img src={logo} alt="Anchor Chat" />}
          rightButton={
            <IconMenu
              icon={<IconExit color={colors.white} />}
              header="Language"
              headerStyle={{ textTransform: 'capitalize' }}
            >
              <MenuItem text="Active item" active />
              <MenuItem text="Inactive item" />
            </IconMenu>
          }
        />
        <article>
          <ProfileCard username={currentUser} avatar={theDoctor} style={{ borderRight: `1px solid ${colors.grey}` }} />
          <List style={channelListStyle} header="Channels">
            {channels.map(channel => (
              <ListItem
                key={`channel-list-${channel.name}`}
                primaryText={channel.name}
                secondaryText={`${channel.users.length}/${channel.maxUsers}`}
                active={currentChannel === channel.name}
                rightButton={
                  currentChannel === channel.name
                  ? <Button iconButton onClick={() => {}}>
                    <IconClose color={colors.white} />
                  </Button>
                  : null
                }
                avatar={<ChannelAvatar inverted={currentChannel === channel.name} />}
                badge={<Badge inverted={currentChannel === channel.name} value={10} maxValue={9} />}
              />
            ))}
          </List>
        </article>
        <article style={channelStyle}>
          <ChannelHeader
            name={currentChannel}
            rightButton={
              <Button iconButton onClick={() => {}}>
                <IconPeople />
              </Button>
            }
            leftButton={
              <Button iconButton onClick={() => {}}>
                <IconChannels />
              </Button>
            }
          />
          <MessageList addRef={ref => (this.messageList = ref)} autoScroll>
            {this.state.messages.map((message, index) => (
              <Message
                message={message} key={`message-${index}`}
                myMessage={message.username === currentUser}
                avatar={message.profileImage}
                emoji
                fontSize={message.fontSize ? message.fontSize : null}
              />
            ))}
          </MessageList>
          <MessageInput
            onChange={this.changeMessage}
            placeholder="Type something..."
            value={this.state.message}
            sendMessage={this.sendMessage}
            leftButton={
              <Button iconButton onClick={() => {}}>
                <IconEmoji />
              </Button>
            }
          />
        </article>
        <article>
          <EmptyState
            style={userListStyle}
            background={emptyState.background}
            headerText={emptyState.header}
            bodyText={emptyState.body}
            button={<Button onClick={() => {}}>Click me</Button>}
          />
        </article>
      </section>
    );
  }
}

export default App;
