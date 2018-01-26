export default `
  \`\`\`jsx
  import React from 'react';
  import _ from 'lodash';
  import moment from 'moment';
  import Message from 'anchor-ui/message';
  import MessageList from 'anchor-ui/message-list';
  import Paper from 'anchor-ui/paper';
  import DateSeparator from 'anchor-ui/date-separator';

  const messages = [
    {
      body: 'Stop talking, brain thinking. Hush. You know when grown-ups tell you 'everything's going to be fine' and you think they're probably lying to make you feel better? I'm the Doctor. Well, they call me the Doctor. I don't know why. I call me the Doctor too. I still don't know why.',
      createdAt: moment().toISOString(),
      username: 'Sjaak',
      avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400',
      id: 1
    },
    {
      body: 'Daleks have no concept of elegance.',
      createdAt: moment().toISOString(),
      username: 'Ian',
      avatar: 'https://avatars0.githubusercontent.com/u/14125280?v=3&s=400',
      id: 2
    },
    {
      body: ':pig2:',
      createdAt: moment().add(1, 'days').toISOString(),
      username: 'Sjaak',
      avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400',
      id: 3
    }
  ];

  const currentUser = 'Ian';

  const DateSeparatorExample = () => {
    let lastDate = moment().toISOString();

    return (
      <MessageList>
        {messages.map((message, index) => {
          let showDateSeparator = false;

          if (index === 0) {
            showDateSeparator = true;
          }

          const date = message.createdAt;
          const dateIsAfterLastDate = moment(date).diff(moment(lastDate), 'days');

          if (!showDateSeparator && dateIsAfterLastDate) {
            showDateSeparator = true;
          }

          lastDate = date;

          return (
            <Message
              body={message.body}
              createdAt={moment(message.createdAt).format('HH:mm')}
              username={message.username}
              type={message.type}
              key={message.id}
              myMessage={message.username === currentUser}
              avatar={message.avatar}
              emoji
              separator={showDateSeparator ? <DateSeparator date={moment(message.createdAt).format('D MMM')} /> : null}
            />
          );
        })}
      </MessageList>
    );
  };

  export default DateSeparatorExample;
  \`\`\`
`;
