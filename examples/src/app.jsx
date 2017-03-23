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
  MenuItem,
  Select,
  RadioButton,
  RadioButtonGroup,
  Paper,
  Menu,
  Tabs,
  Tab
} from '../../dist';
import { IconClose, IconEmoji, IconExit, IconPeople, IconChannels, ChannelAvatar, IconMenu as MenuIcon } from '../../dist/icons';
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
    profileImage: theDoctor,
    type: 'text'
  },
  {
    body: 'This is a medium message',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor,
    fontSize: 'medium',
    type: 'text'
  },
  {
    body: 'This is a large message',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor,
    fontSize: 'large',
    type: 'text'
  },
  {
    body: 'Stop talking, brain thinking. Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor,
    type: 'text'
  },
  {
    body: 'Daleks have no concept of elegance.',
    createdAt: new Date(),
    username: 'Dalek',
    profileImage: dalek,
    type: 'text'
  },
  {
    body: 'You hit me with a cricket bat. I\'m nobody\'s taxi service; I\'m not gonna be there to catch you every time you feel like jumping out of a spaceship. Sorry, checking all the water in this area; there\'s an escaped fish.',
    createdAt: new Date(),
    username: 'The Doctor',
    profileImage: theDoctor,
    type: 'text'
  },
  {
    body: ':whale2:',
    createdAt: new Date(),
    username: 'Dalek',
    profileImage: dalek,
    type: 'text'
  },
  {
    body: 'https://unsplash.it/500/250/?random',
    createdAt: new Date(),
    username: 'Dalek',
    profileImage: dalek,
    type: 'image'
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
      messages,
      select: 2,
      radio: 'test',
      menu: false
    };

    this.changeMessage = this.changeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
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

  changeSelect(value) {
    this.setState({
      select: value
    });
  }

  changeRadio(event) {
    this.setState({
      radio: event.currentTarget.value
    });
  }

  toggleMenu() {
    this.setState({
      menu: !this.state.menu
    });
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
              secondaryMenuItems={[<MenuItem text="An item" onClick={() => {}} />, <MenuItem text="Another item" onClick={() => {}} />]}
              dividerText="More items"
            >
              <MenuItem text="Active item" onClick={() => {}} active />
              <MenuItem text="Inactive item" onClick={() => {}} />
            </IconMenu>
          }
          leftButton={
            <Button iconButton onClick={this.toggleMenu}>
              <MenuIcon color={colors.white} />
            </Button>
          }
        />
        <article>
          <ProfileCard username={currentUser} avatar={theDoctor} style={{ borderRight: `1px solid ${colors.grey}` }} />
          <Tabs style={channelListStyle}>
            <Tab label="1">
              <List header="Channels">
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
                    badge={
                      <Badge inverted={currentChannel === channel.name} value={10} maxValue={9} />
                    }
                  />
                ))}
              </List>
            </Tab>
            <Tab label="2" badge={<Badge value={2} maxValue={9} />}>
              <p>2</p>
            </Tab>
          </Tabs>
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
            button={<Button disabled>Click me</Button>}
          />
        </article>
        <Menu open={this.state.menu} toggleMenu={this.toggleMenu} header="Menu">
          <MenuItem text="hi1" onClick={() => this.changeSelect(1)} value={1} />
          <MenuItem text="hi2" onClick={() => this.changeSelect(2)} value={2} />
          <MenuItem text="hi3" onClick={() => this.changeSelect(3)} value={3} />
        </Menu>
        <Select open={this.state.select} value={this.state.select} onChange={this.changeSelect} label="Select">
          <MenuItem text="hi1" value={1} />
          <MenuItem text="hi2" value={2} />
          <MenuItem text="hi3" value={3} />
        </Select>
        <RadioButtonGroup value={this.state.radio} label="Radio">
          <RadioButton value="test" label="test" onChange={this.changeRadio} />
          <RadioButton value="test1" label="test1" onChange={this.changeRadio} />
        </RadioButtonGroup>
        <Paper depth={1}>
          <h1>Paper: depth 1</h1>
        </Paper>
        <Paper depth={2}>
          <h1>Paper: depth 2</h1>
        </Paper>
        <Paper depth={3}>
          <h1>Paper: depth 3</h1>
        </Paper>
        <Paper depth={4}>
          <h1>Paper: depth 4</h1>
        </Paper>
        <Paper depth={5}>
          <h1>Paper: depth 5</h1>
        </Paper>
      </section>
    );
  }
}

export default App;
