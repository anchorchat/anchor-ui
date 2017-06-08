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

  handleHover = (event, command) => this.setState({ command })

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
        title: '/collapse',
        description: 'collapse all images'
      },
      {
        title: '/giphy',
        description: 'send a random gif',
        param: 'text'
      },
      {
        title: '/expand',
        description: 'expand all images'
      },
      {
        title: '/exit',
        description: 'exit the building'
      },
      {
        title: '/epic',
        description: 'show some epic stuff'
      },
      {
        title: '/away',
        description: 'toggle your away status'
      },
      {
        title: '/leave',
        description: 'leave the channel'
      },
      {
        title: '/mute',
        description: 'mute the channel'
      }
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
              onHover={this.handleHover}
              onSelect={this.handleSelect}
            />
            <MessageInput
              onChange={this.changeValue}
              placeholder="Type / to view and filter the commands"
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
