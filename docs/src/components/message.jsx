import React from 'react';
import { Message, List } from 'anchor-ui';
import PropsTable from './props-table';
import components from '../../components.json';
import omitSheetFromProps from '../utils/omit-sheet-from-props';
import theDoctor from '../assets/images/the_doctor.jpg';
import dalek from '../assets/images/dalek.jpg';

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

function MessageDoc() {
  const componentData = components['src/components/message.jsx'];
  const props = omitSheetFromProps(componentData.props);
  return (
    <article>
      <h1>Messages</h1>
      <hr />
      <section>
        <h1>Description</h1>
        <p>{componentData.description}</p>
        <hr />
      </section>
      <section>
        <h1>Examples</h1>
        <List>
          {messages.map((message, index) => (
            <Message
              message={message} key={`message-${index}`}
              myMessage={message.username === currentUser}
              avatar={message.profileImage}
              emoji
            />
          ))}
        </List>
        <hr />
      </section>
      <section>
        <h1>Props</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default value</th>
              <th>Required</th>
            </tr>
          </thead>
          <PropsTable props={props} />
        </table>
        <hr />
      </section>
    </article>
  );
}

export default MessageDoc;
