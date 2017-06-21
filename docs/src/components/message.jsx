import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Message from '../../../dist/message';
import MessageList from '../../../dist/message-list';
import MenuItem from '../../../dist/menu-item';
import Props from './props';
import components from '../../components.json';
import background from '../assets/images/channel-background.jpg';
import Paper from '../../../dist/paper';
import Select from '../../../dist/select';

const usage = '```js\n import Message from \'anchor-ui/message\';';

const messages = [
  {
    body: 'Stop talking, brain thinking.  @Sjaak Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.',
    createdAt: new Date(),
    username: 'Sjaak',
    avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400',
    id: 1
  },
  {
    body: 'Daleks have no concept of elegance.',
    createdAt: new Date(),
    username: 'Ian',
    avatar: 'https://avatars0.githubusercontent.com/u/14125280?v=3&s=400',
    id: 2
  },
  {
    body: ':hammer:',
    createdAt: new Date(),
    username: 'Lars',
    avatar: 'https://avatars0.githubusercontent.com/u/16486197?v=3&s=400',
    id: 3
  },
  {
    body: 'https://telegram.org/file/811140066/1/7fM-CwKk4F0/53f9f1fc731c63547d',
    createdAt: new Date(),
    username: 'Lars',
    avatar: 'https://avatars0.githubusercontent.com/u/16486197?v=3&s=400',
    id: 4,
    type: 'sticker'
  },
  {
    body: 'https://telegram.org/file/811140750/1/KwtOAxwo1SA/452620c767366798d3',
    createdAt: new Date(),
    username: 'Sjaak',
    avatar: 'https://avatars0.githubusercontent.com/u/16486197?v=3&s=400',
    id: 5,
    type: 'sticker'
  },
  {
    body: 'https://source.unsplash.com/random/375x667',
    createdAt: new Date(),
    username: 'Sjaak',
    avatar: 'https://avatars0.githubusercontent.com/u/16486197?v=3&s=400',
    id: 6,
    type: 'image'
  },
  {
    body: 'is typing',
    createdAt: new Date(),
    username: 'Lars',
    avatar: 'https://avatars0.githubusercontent.com/u/16486197?v=3&s=400',
    id: 7,
    type: 'typing'
  },
];

const currentUser = 'Sjaak';

class MessageDoc extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: false,
      fontSize: 'small',
      compact: false,
      iconMenu: false,
      edited: false
    };
  }

  selectCollapse = collapsed => this.setState({ collapsed })

  selectCompact = () => this.setState({ compact: !this.state.compact })

  selectFontSize = fontSize => this.setState({ fontSize })

  selectIconMenu = iconMenu => this.setState({ iconMenu })

  selectEdited = edited => this.setState({ edited })

  render() {
    const componentData = _.find(components, component => component.displayName === 'Message');
    const style = {
      paper: {
        margin: '0 0 20px 0',
        padding: '20px'
      },
      list: {
        backgroundImage: `url(${background})`,
        backgroundSize: '500px',
        height: '475px'
      },
      options: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '10px 0'
      },
      select: {
        margin: '5px'
      }
    };
    const scalingEmoji = `
      .small .emojione {
        width: 18px;
      }

      .medium .emojione {
        width: 20px;
      }

      .large .emojione {
        width: 24px;
      }
    `;

    const menuItems = [
      <MenuItem key="item1" text="Menu Item" onClick={() => {}} />,
      <MenuItem key="item2" text="Another Menu Item" onClick={() => {}} />
    ];

    return (
      <article className="doc">
        <h1>Message</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Usage</h1>
          <ReactMarkdown source={usage} className="markdown" />
        </section>
        <section>
          <h1>Scaling emoji&apos;s</h1>
          <p>
            If you would like the emoji&apos;s to scale with the font size add the
            following to your style sheet:
          </p>
          <ReactMarkdown source={scalingEmoji} className="markdown" />
        </section>
        <section>
          <h1>Examples</h1>
          <div style={style.options}>
            <Select style={style.select} label="Collapsed images" value={this.state.collapsed} onChange={this.selectCollapse}>
              <MenuItem text="On" value />
              <MenuItem text="Off" value={false} />
            </Select>
            <Select style={style.select} label="Font size" value={this.state.fontSize} onChange={this.selectFontSize}>
              <MenuItem text="Small" value="small" />
              <MenuItem text="Medium" value="medium" />
              <MenuItem text="Large" value="large" />
            </Select>
            <Select style={style.select} label="Compact messages" value={this.state.compact} onChange={this.selectCompact}>
              <MenuItem text="On" value />
              <MenuItem text="Off" value={false} />
            </Select>
            <Select style={style.select} label="Icon menu" value={this.state.iconMenu} onChange={this.selectIconMenu}>
              <MenuItem text="On" value />
              <MenuItem text="Off" value={false} />
            </Select>
            <Select style={style.select} label="Edited messages" value={this.state.edited} onChange={this.selectEdited}>
              <MenuItem text="On" value />
              <MenuItem text="Off" value={false} />
            </Select>
          </div>
          <Paper style={style.paper}>
            <MessageList style={style.list}>
              {messages.map(message => (
                <Message
                  message={message}
                  key={`message-${message.id}`}
                  myMessage={message.username === currentUser}
                  avatar={message.avatar}
                  emoji
                  collapsed={this.state.collapsed}
                  expand={() => this.selectCollapse(false)}
                  fontSize={this.state.fontSize}
                  compact={this.state.compact}
                  menuItems={this.state.iconMenu ? menuItems : null}
                  edited={this.state.edited ? 'edited' : null}
                  mentions
                />
              ))}
            </MessageList>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MessageDoc;
