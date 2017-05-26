import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Message from '../../../dist/message';
import MessageList from '../../../dist/message-list';
import MenuItem from '../../../dist/menu-item';
import Props from './props';
import components from '../../components.json';
import background from '../assets/images/channel-background.jpg';
import Paper from '../../../dist/paper';

const usage = '```js\n import Message from \'anchor-ui/message\';';

const messages = [
  {
    body: 'Stop talking, brain thinking. Hush. You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying to make you feel better? I\'m the Doctor. Well, they call me the Doctor. I don\'t know why. I call me the Doctor too. I still don\'t know why.',
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
];

const currentUser = 'Sjaak';

const MessageDoc = () => {
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
        <p>If you would like the emoji&apos;s to scale with the font size add the following to your style sheet:</p>
        <ReactMarkdown source={scalingEmoji} className="markdown" />
      </section>
      <section>
        <h1>Default example</h1>
        <Paper style={style.paper}>
          <MessageList style={style.list}>
            {messages.map(message => (
              <Message
                message={message}
                key={`message-${message.id}`}
                myMessage={message.username === currentUser}
                avatar={message.avatar}
                emoji
              />
            ))}
          </MessageList>
        </Paper>
        <h1>Medium font size</h1>
        <Paper style={style.paper}>
          <MessageList style={style.list}>
            {messages.map(message => (
              <Message
                message={message}
                key={`message-${message.id}`}
                myMessage={message.username === currentUser}
                avatar={message.avatar}
                fontSize="medium"
                emoji
              />
            ))}
          </MessageList>
        </Paper>
        <h1>Large font size</h1>
        <Paper style={style.paper}>
          <MessageList style={style.list}>
            {messages.map(message => (
              <Message
                message={message}
                key={`message-${message.id}`}
                myMessage={message.username === currentUser}
                avatar={message.avatar}
                fontSize="large"
                emoji
              />
            ))}
          </MessageList>
        </Paper>
        <h1>Compact message</h1>
        <Paper style={style.paper}>
          <MessageList style={style.list}>
            {messages.map(message => (
              <Message
                message={message}
                key={`message-${message.id}`}
                myMessage={message.username === currentUser}
                avatar={message.avatar}
                emoji
                compact
              />
            ))}
          </MessageList>
        </Paper>
        <h1>Message with IconMenu</h1>
        <Paper style={style.paper}>
          <MessageList style={style.list}>
            {messages.map(message => (
              <Message
                message={message}
                key={`message-${message.id}`}
                myMessage={message.username === currentUser}
                avatar={message.avatar}
                emoji
                menuItems={[
                  <MenuItem text="Menu Item" onClick={() => {}} />,
                  <MenuItem text="Another Menu Item" onClick={() => {}} />
                ]}
              />
            ))}
          </MessageList>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default MessageDoc;
