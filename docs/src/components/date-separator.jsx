import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import addDays from 'date-fns/add_days';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import Message from '../../../dist/message';
import MessageList from '../../../dist/message-list';
import Props from './props';
import components from '../../components.json';
import background from '../assets/images/channel-background.jpg';
import Paper from '../../../dist/paper';
import DateSeparator from '../../../dist/date-separator';

const usage = '```js\n import DateSeparator from \'anchor-ui/date-separator\';';

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
    createdAt: addDays(new Date(), 1),
    username: 'Sjaak',
    avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400',
    id: 3
  },
];

const currentUser = 'Ian';

const DateSeparatorDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'DateSeparator');

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

  let lastDate = new Date();

  return (
    <article className="doc">
      <h1>{componentData.displayName}</h1>
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
      </section>
      <section>
        <h1>Usage</h1>
        <ReactMarkdown source={usage} className="markdown" />
      </section>
      <section>
        <h1>Examples</h1>
        <Paper style={style.paper}>
          <MessageList style={style.messageList}>
            {messages.map((message, index) => {
              let showDateSeparator = false;

              if (index === 0) {
                showDateSeparator = true;
              }

              const date = message.createdAt;
              const dateIsAfterLastDate = differenceInCalendarDays(date, lastDate);

              if (!showDateSeparator && dateIsAfterLastDate) {
                showDateSeparator = true;
              }

              lastDate = date;

              return (
                <Message
                  message={message}
                  key={`message-${message.id}`}
                  myMessage={message.username === currentUser}
                  avatar={message.avatar}
                  emoji
                  separator={showDateSeparator ? <DateSeparator date={message.createdAt} /> : null}
                />
              );
            })}
          </MessageList>
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default DateSeparatorDoc;
