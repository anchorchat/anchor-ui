import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Message from '../../../dist/message';
import MessageList from '../../../dist/message-list';
import Props from './props';
import components from '../../components.json';
import background from '../assets/images/channel-background.jpg';
import Paper from '../../../dist/paper';

const usage = '```js\n import Lightbox from \'anchor-ui/message\';';

const message = {
  body: 'https://source.unsplash.com/random/375x667',
  createdAt: new Date(),
  username: 'Sjaak',
  avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400',
  type: 'image'
};

const currentUser = 'Sjaak';

function LightboxDoc() {
  const componentData = _.find(components, component => component.displayName === 'Lightbox');
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

  return (
    <article className="doc">
      <h1>Lightbox</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Example</h1>
        <Paper style={style.paper}>
          <MessageList style={style.list}>
            <Message
              message={message}
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
}

export default LightboxDoc;
