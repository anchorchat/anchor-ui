import React, { Component } from 'react';
import _ from 'underscore';
import Commands from '../../../../dist/commands';
import MessageInput from '../../../../dist/message-input';
import Paper from '../../../../dist/paper';

class CommandsDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valueToMatch: '',
      selectedCommand: ''
    };
  }

  changeValue = (event) => {
    const value = event.currentTarget.value;

    let valueToMatch = '';

    if (value.indexOf('@') > -1) {
      valueToMatch = _.last(value.split('@'));
    }

    if (value.length > this.input.selectionStart) {
      const slicedValue = value.slice(0, this.input.selectionStart);

      if (slicedValue.indexOf('@') > -1) {
        const splitValue = slicedValue.split('@');

        valueToMatch = _.last(splitValue);
      }
    }

    if (value) {
      this.setState({ value, valueToMatch: `@${valueToMatch}` });
    }
  }

  handleSelect = (event, command) => {
    const { value, valueToMatch, selectedCommand } = this.state;

    this.setState({
      value: value.replace(selectedCommand || valueToMatch, command),
      valueToMatch: '',
      selectedCommand: ''
    });

    this.input.focus();
  }

  handleChange = (event, command) => {
    const { value, valueToMatch, selectedCommand } = this.state;

    this.setState({
      value: value.replace(selectedCommand || valueToMatch, command),
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
    const mentions = [
      {
        value: 'IanCStewart',
        prefix: '@',
        avatar: 'https://avatars0.githubusercontent.com/u/14125280?v=3&s=400'
      },
      {
        value: 'sjaakluthart',
        prefix: '@',
        avatar: 'https://avatars1.githubusercontent.com/u/6596471?v=3&s=400'
      },
      {
        value: 'larstadema',
        prefix: '@',
        avatar: 'https://avatars2.githubusercontent.com/u/16486197?v=3&s=400'
      },
    ];

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
          sendMessage={() => {}}
          style={style.messageInput}
          inputRef={(node) => { this.input = node; }}
        />
      </Paper>
    );
  }
}

export default CommandsDoc;
