/* eslint no-console: [0] */
import React, { Component } from 'react';
import find from 'lodash/find';
import includes from 'lodash/includes';
import split from 'lodash/split';
import replace from 'lodash/replace';
import noop from 'lodash/noop';
import last from 'lodash/last';
import EmojiFilter from '../anchor-ui/emoji-filter';
import MessageInput from '../anchor-ui/message-input';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import EmojiFilter from 'anchor-ui/emoji-filter';
  \`\`\`
`;

const componentData = find(components, { displayName: 'EmojiFilter' });
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
    marginTop: '10px',
    width: '100%'
  },
  commands: {
    width: 'calc(100% - 32px)',
    marginLeft: '16px'
  }
};

class EmojiFilterDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valueToMatch: '',
      selectedEmoji: ''
    };
  }

  changeValue = (event) => {
    const { value } = event.currentTarget;

    let valueToMatch = '';

    if (includes(value, ':')) {
      valueToMatch = last(split(value, ':'));
    }

    if (value.length > this.input.selectionStart) {
      const slicedValue = value.slice(0, this.input.selectionStart);

      if (includes(slicedValue, ':')) {
        const splitValue = split(slicedValue, ':');

        valueToMatch = last(splitValue);
      }
    }

    this.setState({ value, valueToMatch: `:${valueToMatch}` });
  }

  handleSelect = (event, emoji) => {
    const { value, valueToMatch, selectedEmoji } = this.state;

    this.setState({
      value: replace(value, selectedEmoji || valueToMatch, emoji.shortname),
      valueToMatch: '',
      selectedEmoji: ''
    });

    this.input.focus();
  }

  handleChange = (event, emoji) => {
    const { value, valueToMatch, selectedEmoji } = this.state;

    this.setState({
      value: replace(value, selectedEmoji || valueToMatch, emoji.shortname),
      selectedEmoji: emoji.shortname
    });
  }

  handleClose = () => this.setState({ valueToMatch: '', selectedEmoji: '' })

  render() {
    const { valueToMatch, value } = this.state;

    return (
      <article className="page">
        <h1>EmojiFilter</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <EmojiFilter
              style={style.commands}
              value={valueToMatch}
              onSelect={this.handleSelect}
              onChange={this.handleChange}
              onMenuClose={this.handleClose}
            />
            <MessageInput
              onChange={this.changeValue}
              placeholder="Type : to view and filter emoji"
              value={value}
              sendMessage={noop}
              style={style.messageInput}
              inputRef={(node) => { this.input = node; }}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default EmojiFilterDoc;
