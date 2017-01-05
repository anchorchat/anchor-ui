import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import inputStyle from '../style/inputs';
import Button from './button';
import IconSend from '../icons/icon-send';
import colors from '../style/colors';

class MessageInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        messageInput: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.shape({
      messageInput: PropTypes.object
    })
  }

  constructor() {
    super();

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    const { sendMessage } = this.props;

    if (event.which === 13) {
      sendMessage();
    }
  }

  render() {
    const { onChange, sendMessage, placeholder, value, sheet: { classes }, style } = this.props;

    const buttonStyle = {
      button: {
        position: 'absolute',
        right: '0'
      }
    };

    return (
      <section>
        <input
          className={getClassNames(classes, 'messageInput', style)}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type="text"
          onKeyDown={this.handleKeyDown}
        />
        <Button onClick={sendMessage} style={buttonStyle}>
          <IconSend color={colors.green} />
        </Button>
      </section>
    );
  }
}

export default injectSheet(inputStyle)(MessageInput);
