import React, { Component } from 'react';
import _ from 'lodash';
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
  }

  changeValue = (event) => {
    const { value } = event.currentTarget;

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

  handleRef = (node) => { this.input = node; }

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
          sendMessage={_.noop}
          style={style.messageInput}
          inputRef={this.handleRef}
        />
      </Paper>
    );
  }
}

export default CommandsDoc;
