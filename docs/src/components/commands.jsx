/* global alert */
/* eslint no-alert: [0] */
/* eslint no-console: [0] */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Commands from '../../../dist/commands';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Commands from \'anchor-ui/commands\';';

const CommandsDoc = () => {
  const componentData = _.find(components, component => component.displayName === 'Commands');
  const style = {
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: 0,
      padding: '20px'
    },
    appHeader: { margin: '10px' }
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
          <Commands commands={commands} onHover={command => console.log('hover', command)} onSelect={command => alert(`selected ${command}`)} />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
};

export default CommandsDoc;
