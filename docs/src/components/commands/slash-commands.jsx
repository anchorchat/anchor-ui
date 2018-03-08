import React, { Component } from 'react';
import includes from 'lodash/includes';
import split from 'lodash/split';
import replace from 'lodash/replace';
import last from 'lodash/last';
import noop from 'lodash/noop';
import Commands from '../../../../dist/commands';
import MessageInput from '../../../../dist/message-input';
import Paper from '../../../../dist/paper';

class SlashCommands extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valueToMatch: '',
      selectedCommand: ''
    };
  }

  changeValue = (event) => {
    const { value } = event.currentTarget;

    let valueToMatch = '';

    if (includes(value, '/')) {
      valueToMatch = last(split(value, '/'));
    }

    if (value.length > this.input.selectionStart) {
      const slicedValue = value.slice(0, this.input.selectionStart);

      if (includes(slicedValue, '/')) {
        const splitValue = split(slicedValue, '/');

        valueToMatch = last(splitValue);
      }
    }

    if (value) {
      this.setState({ value, valueToMatch: `/${valueToMatch}` });
    }
  }

  handleSelect = (event, command) => {
    const { value, valueToMatch, selectedCommand } = this.state;

    this.setState({
      value: replace(value, selectedCommand || valueToMatch, command),
      valueToMatch: '',
      selectedCommand: ''
    });

    this.input.focus();
  }

  handleChange = (event, command) => {
    const { value, valueToMatch, selectedCommand } = this.state;

    this.setState({
      value: replace(value, selectedCommand || valueToMatch, command),
      selectedCommand: command
    });
  }

  handleClose = () => {
    this.setState({ valueToMatch: '', selectedCommand: '' });
  }

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
    const commands = [
      {
        value: 'collapse',
        prefix: '/',
        description: 'collapse all images'
      },
      {
        value: 'giphy',
        prefix: '/',
        description: 'send a random gif',
        param: 'text'
      },
      {
        value: 'expand',
        prefix: '/',
        description: 'expand all images'
      },
      {
        value: 'exit',
        prefix: '/',
        description: 'exit the building'
      },
      {
        value: 'epic',
        prefix: '/',
        description: 'show some epic stuff'
      },
      {
        value: 'away',
        prefix: '/',
        description: 'toggle your away status'
      },
      {
        value: 'leave',
        prefix: '/',
        description: 'leave the channel'
      },
      {
        value: 'mute',
        prefix: '/',
        description: 'mute the channel'
      }
    ];

    return (
      <Paper style={style.paper}>
        <Commands
          style={style.commands}
          value={this.state.valueToMatch}
          commands={commands}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          leading
          onMenuClose={this.handleClose}
        />
        <MessageInput
          onChange={this.changeValue}
          placeholder="Type / to view and filter the commands"
          value={this.state.value}
          sendMessage={noop}
          style={style.messageInput}
          inputRef={(node) => { this.input = node; }}
        />
      </Paper>
    );
  }
}

export default SlashCommands;
