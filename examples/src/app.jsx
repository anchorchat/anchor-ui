import React, { Component } from 'react';
import { ChannelList, UserList, MessageInput, Messages } from '../../dist/index';
import './app.css';

const style = {
  ul: {
    'padding-left': '10px'
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };

    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage(event) {
    this.setState({
      message: event.currentTarget.value
    });
  }

  render() {
    return (
      <section className="demo">
        <h1>
          <a
            href="https://github.com/anchorchat/anchor-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anchor UI
          </a>
        </h1>
        <Messages messages={[{ body: 'hi', createdAt: new Date(), username: 'Sjaak' }, { body: 'hi', createdAt: new Date(), username: 'Sven' }]} />
        <UserList users={[{ username: 'Sjaak' }, { username: 'Peter' }, { username: 'Lars' }, { username: 'Sven' }]} style={style} />
        <ChannelList channels={[{ name: 'Channel1' }, { name: 'Channel2' }, { name: 'Channel3' }, { name: 'Channel4' }]} style={style} />
        <MessageInput onChange={this.changeMessage} value={this.state.message} />
      </section>
    );
  }
}

export default App;
