import React from 'react';
import find from 'lodash/find';
import moment from 'moment';
import faker from 'faker';
import Message from '../../../dist/message';
import MessageList from '../../../dist/message-list';
import Props from './props';
import components from '../../components.json';
import background from '../assets/images/channel-background.jpg';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Lightbox from 'anchor-ui/lightbox';
  \`\`\`
`;

const currentUser = faker.internet.userName();

const message = {
  body: 'https://source.unsplash.com/random/1280x1080',
  createdAt: new Date(),
  username: currentUser,
  avatar: faker.internet.avatar(),
  type: 'image'
};

const componentData = find(components, { displayName: 'Lightbox' });
const style = {
  paper: {
    margin: '0 0 20px 0',
    padding: '20px'
  },
  list: {
    backgroundImage: `url(${background})`,
    backgroundSize: '500px',
    height: '495px'
  }
};

const LightboxDoc = () => (
  <article className="page">
    <h1>Lightbox</h1>
    <section>
      <h1>Description</h1>
      <p>{componentData.description}</p>
    </section>
    <Markdown markdown={usage} title="Code example" />
    <section>
      <h1>Example</h1>
      <Paper style={style.paper}>
        <MessageList style={style.list}>
          <Message
            body={message.body}
            createdAt={moment(message.createdAt).format('HH:mm')}
            username={message.username}
            type={message.type}
            myMessage={message.username === currentUser}
            avatar={message.avatar}
            enableLightbox
          />
        </MessageList>
      </Paper>
    </section>
    <Props props={componentData.props} />
  </article>
);

export default LightboxDoc;
