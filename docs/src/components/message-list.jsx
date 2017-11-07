import React from 'react';
import _ from 'lodash';
import Message from '../../../dist/message';
import MessageList from '../../../dist/message-list';
import Props from './props';
import components from '../../components.json';
import background from '../assets/images/channel-background.jpg';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import MessageList from 'anchor-ui/message-list';
  \`\`\`
`;

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
    body: ':pig2:',
    createdAt: new Date(),
    username: 'Sjaak',
    avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400',
    id: 3
  },
];

const currentUser = 'Ian';

const MessageListDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'MessageList');

  const style = {
    paper: {
      margin: 0,
      padding: '20px'
    },
    messageList: {
      backgroundImage: `url(${background})`,
      backgroundSize: '500px',
      height: '475px',
      margin: '10px'
    }
  };

  return (
    <article className="page">
      <h1>MessageList</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <Markdown markdown={usage} title="Code example" />
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <MessageList style={style.messageList}>
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
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default MessageListDoc;
