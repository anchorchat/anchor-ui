/* global alert */
/* eslint no-alert: [0] */
/* eslint no-console: [0] */
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Commands from '../../../dist/commands';
import MessageInput from '../../../dist/message-input';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Commands from \'anchor-ui/commands\';';

class CommandsDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      command: ''
    };
  }

  changeValue = (event) => {
    const { command } = this.state;

    if (command) {
      return this.setState({
        command: '',
        value: command
      });
    }

    return this.setState({ value: event.currentTarget.value });
  }

  handleMouseOver = (event, command) => this.setState({ command })

  handleSelect = (event, command) => {
    this.setState({
      value: command
    });

    alert(`selected ${command}`);
  }

  render() {
    const componentData = _.find(components, component => component.displayName === 'Commands');
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
      <article className="doc">
        <h1>Commands</h1>
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
            <Commands
              style={style.commands}
              value={this.state.value}
              commands={commands}
              onMouseOver={this.handleMouseOver}
              onSelect={this.handleSelect}
              leading
            />
            <Commands
              header="Mentions"
              style={style.commands}
              value={this.state.value}
              commands={mentions}
              onMouseOver={this.handleMouseOver}
              onSelect={this.handleSelect}
              leading={false}
            />
            <MessageInput
              onChange={this.changeValue}
              placeholder="Type / to view and filter the commands, type @ to filter mentions"
              value={this.state.command || this.state.value}
              sendMessage={() => {}}
              style={style.messageInput}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default CommandsDoc;
