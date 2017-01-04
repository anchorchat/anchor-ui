import React, { Component } from 'react';
import {
  UserList,
  MessageInput,
  Messages,
  ChannelHeader,
  MyProfileCard
} from '../../dist/index';
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
        <MyProfileCard username="Ian" />
        <ChannelHeader name="Channel 1" />
        <Messages messages={[{ body: 'hi', createdAt: new Date(), username: 'Sjaak' }, { body: 'hi', createdAt: new Date(), username: 'Sven' }]} />
        <UserList users={[{ username: 'Peter' }, { username: 'Sjaak' }, { username: 'Ian' }, { username: 'Lars' }]} style={style} />
        <MessageInput onChange={this.changeMessage} value={this.state.message} />
      </section>
    );
  }
}

export default App;
