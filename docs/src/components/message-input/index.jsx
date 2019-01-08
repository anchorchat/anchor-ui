import React from 'react';
import find from 'lodash/find';
import replace from 'lodash/replace';
import MessageInput from '../../../../dist/message-input';
import Button from '../../../../dist/button';
import IconEmoji from '../../../../dist/icons/icon-emoji';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import example from './example';
import Markdown from '../markdown';

const componentData = find(components, { displayName: 'MessageInput' });
const style = {
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 0,
    padding: '20px'
  }
};

class MessageInputDoc extends React.Component {
  state = {
    value: '',
    multiLine: ''
  }

  handleChange = event => this.setState({ value: event.currentTarget.value })

  handleMultiLineChange = event => this.setState({ multiLine: event.currentTarget.value })

  sendMessage = () => this.setState({ value: '' })

  sendMultiLineMessage = () => this.setState({ multiLine: '' })

  render() {
    const { value, multiLine } = this.state;

    return (
      <article className="page">
        <h1>MessageInput</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <Markdown markdown={example} title="Code example" />
        </section>
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <MessageInput
              onChange={this.handleChange}
              placeholder="Type something..."
              value={value}
              sendMessage={this.sendMessage}
              leftButton={(
                <Button iconButton>
                  <IconEmoji />
                </Button>
              )}
              rightButton={(
                <Button iconButton>
                  <IconEmoji />
                </Button>
              )}
            />
            <span dangerouslySetInnerHTML={{ __html: replace(multiLine, /\n/g, '<br />') }} />
            <MessageInput
              onChange={this.handleMultiLineChange}
              placeholder="Multi line example..."
              value={multiLine}
              sendMessage={this.sendMultiLineMessage}
              leftButton={(
                <Button iconButton>
                  <IconEmoji />
                </Button>
              )}
              rightButton={(
                <Button iconButton>
                  <IconEmoji />
                </Button>
              )}
              multiLine
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default MessageInputDoc;
