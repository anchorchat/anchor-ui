import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../internal/get-class-names';
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

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'messageInput', 'MessageInput');

    this.state = {
      className
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    const { sendMessage } = this.props;

    if (event.which === 13) {
      sendMessage();
    }
  }

  render() {
    const { onChange, sendMessage, placeholder, value } = this.props;
    const { className } = this.state;

    const buttonStyle = {
      position: 'absolute',
      right: '4px',
      top: '4px'
    };

    return (
      <section style={{ position: 'relative' }}>
        <input
          className={className}
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
