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
      message: '',
      multiline: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleMultiLineChange = this.handleMultiLineChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleMultiLineChange(event) {
    this.setState({
      multiline: event.target.value
    });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'MessageInput');

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
          <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0, padding: '20px' }}>
            <MessageInput
              onChange={this.handleChange}
              placeholder="Type something..."
              value={this.state.message}
              sendMessage={() => {}}
              leftButton={
                <Button iconButton onClick={() => {}}>
                  <IconEmoji />
                </Button>
              }
              style={{ paddingTop: 0, paddingBottom: 0 }}
            />
            <MessageInput
              onChange={this.handleMultiLineChange}
              placeholder="Multiline example"
              value={this.state.multiline}
              sendMessage={() => {}}
              leftButton={
                <Button iconButton onClick={() => {}}>
                  <IconEmoji />
                </Button>
              }
              style={{ paddingTop: 0, paddingBottom: 0 }}
              multiline
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MessageInputDoc;
