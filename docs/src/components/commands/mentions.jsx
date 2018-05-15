import React, { Component, createRef } from 'react';
import includes from 'lodash/includes';
import split from 'lodash/split';
import replace from 'lodash/replace';
import last from 'lodash/last';
import noop from 'lodash/noop';
import faker from 'faker';
import Commands from '../../../../dist/commands';
import MessageInput from '../../../../dist/message-input';
import Paper from '../../../../dist/paper';

const mentions = [
  {
    value: faker.internet.userName(),
    prefix: '@',
    avatar: faker.internet.avatar()
  },
  {
    value: faker.internet.userName(),
    prefix: '@',
    avatar: faker.internet.avatar()
  },
  {
    value: faker.internet.userName(),
    prefix: '@',
    avatar: faker.internet.avatar()
  },
];

class CommandsDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valueToMatch: '',
      selectedCommand: ''
    };

    this.messageInputRef = createRef();
  }

  changeValue = (event) => {
    const { value } = event.currentTarget;
    const input = this.messageInputRef.current.inputRef.current;

    let valueToMatch = '';

    if (includes(value, '@')) {
      valueToMatch = split(value, '@');
    }

    if (value.length > input.selectionStart) {
      const slicedValue = value.slice(0, input.selectionStart);

      if (includes(slicedValue, '@')) {
        const splitValue = split(slicedValue, '@');

        valueToMatch = last(splitValue);
      }
    }

    if (value) {
      this.setState({ value, valueToMatch: `@${valueToMatch}` });
    }
  }

  handleSelect = (event, command) => {
    const { value, valueToMatch, selectedCommand } = this.state;
    const messageInput = this.messageInputRef.current;

    this.setState({
      value: replace(value, selectedCommand || valueToMatch, command),
      valueToMatch: '',
      selectedCommand: ''
    });

    messageInput.focusInput();
  }

  handleChange = (event, command) => {
    const { value, valueToMatch, selectedCommand } = this.state;

    this.setState({
      value: replace(value, selectedCommand || valueToMatch, command),
      selectedCommand: command
    });
  }

  handleClose = () => this.setState({ valueToMatch: '', selectedCommand: '' })

  render() {
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
      <Paper style={style.paper}>
        <Commands
          header="Mentions"
          style={style.commands}
          value={this.state.valueToMatch}
          commands={mentions}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          leading={false}
          onMenuClose={this.handleClose}
        />
        <MessageInput
          onChange={this.changeValue}
          placeholder="Type @ to filter mentions"
          value={this.state.value}
          sendMessage={noop}
          style={style.messageInput}
          ref={this.messageInputRef}
        />
      </Paper>
    );
  }
}

export default CommandsDoc;
