import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import MessageInput from '../../../dist/message-input';
import Button from '../../../dist/button';
import IconEmoji from '../../../dist/icons/icon-emoji';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import MessageInput from \'anchor-ui/message-input\';';

class MessageInputDoc extends React.Component {
  constructor() {
    super();

    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    this.setState({
      name: name.target.value
    });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'MessageInput');
    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      },
      messageInput: {
        paddingTop: 0,
        paddingBottom: 0,
        margin: '10px'
      }
    };

    return (
      <article className="doc">
        <h1>MessageInput</h1>
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
            <MessageInput
              onChange={this.handleChange}
              placeholder="Type something..."
              value={this.state.name}
              sendMessage={() => {}}
              leftButton={
                <Button iconButton onClick={() => {}}>
                  <IconEmoji />
                </Button>
              }
              style={style.messageInput}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MessageInputDoc;
