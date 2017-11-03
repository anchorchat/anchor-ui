export default `
  \`\`\`js
  import React, { Component } from 'react';
  import MessageInput from 'anchor-ui/message-input';

  class MyComponent extends Component {
    state = {
      value: ''
    }

    // This is called by both enter and click
    handleSendMessage = () => {
      // Assuming there is a function/prop which actually sends the message
      const { sendMessage } = this.props;

      // Grab input value from state. This is set by handleChange
      const { value } = this.state;

      sendMessage(value);
    }

    handleChange = (event) => {
      this.setState({
        value: event.currentTarget.value
      });
    }

    render() {
      const { value } = this.state;

      return (
        <MessageInput
          onChange={this.handleChange}
          placeholder="Type something..."
          value={value}
          sendMessage={this.handleSendMessage}
        />
      );
    }
  }
  \`\`\`
`;
