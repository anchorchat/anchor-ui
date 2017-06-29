/* eslint no-console: [0] */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import EmojiFilter from '../../../dist/emoji-filter';
import MessageInput from '../../../dist/message-input';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import EmojiFilter from \'anchor-ui/commands\';';

class EmojiFilterDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valueToMatch: ''
    };
  }

  changeValue = (event) => {
    const value = event.currentTarget.value;

    let valueToMatch = '';

    if (value.indexOf(':') > -1) {
      valueToMatch = _.last(value.split(':'));
    }

    if (value.length > this.input.selectionStart) {
      const slicedValue = value.slice(0, this.input.selectionStart);

      if (slicedValue.indexOf(':') > -1) {
        const splitValue = slicedValue.split(':');

        valueToMatch = _.last(splitValue);
      }
    }

    console.log('valueToMatch', valueToMatch);

    this.setState({ value, valueToMatch: `:${valueToMatch}` });
  }

  handleSelect = (event, emoji) => {
    const { value, valueToMatch } = this.state;
    console.log('handleSelect');
    this.setState({
      value: value.replace(valueToMatch, emoji.shortname),
      valueToMatch: ''
    });
  }

  handleChange = (event, emoji) => {
    const { value, valueToMatch } = this.state;
    console.log('handleChange');
    this.setState({
      value: value.replace(valueToMatch, emoji.shortname)
    });
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'EmojiFilter');
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

    return (
      <article className="doc">
        <h1>EmojiFilter</h1>
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
            <EmojiFilter
              style={style.commands}
              value={this.state.valueToMatch}
              onSelect={this.handleSelect}
              onChange={this.handleChange}
            />
            <MessageInput
              onChange={this.changeValue}
              placeholder="Type : to view and filter emoji"
              value={this.state.value}
              sendMessage={() => {}}
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
