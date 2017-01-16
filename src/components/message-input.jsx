import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../internal/get-class-names';
import inputStyleSheet from '../style/inputs';
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
    style: PropTypes.instanceOf(Object),
    inputStyle: PropTypes.instanceOf(Object),
    maxLength: PropTypes.number,
    leftButton: PropTypes.node
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    maxLength: 500,
    leftButton: null
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, inputStyle } = props;
    const inputClassName = getClassNames(classes, inputStyle, 'messageInput', 'MessageInput');
    const className = getClassNames(classes, style, 'input', 'MessageInput');

    this.state = {
      className,
      inputClassName
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
    const { onChange, sendMessage, placeholder, value, maxLength, leftButton } = this.props;
    const { className, inputClassName } = this.state;
    const { color } = this.context;
    const iconColor = color || colors.theme;

    const buttonStyle = {
      position: 'absolute',
      right: '20px',
      top: '4px'
    };

    return (
      <section className={className}>
        {leftButton}
        <input
          className={inputClassName}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type="text"
          onKeyDown={this.handleKeyDown}
          maxLength={maxLength}
        />
        <Button iconButton onClick={sendMessage} style={buttonStyle}>
          <IconSend color={iconColor} />
        </Button>
      </section>
    );
  }
}

export default injectSheet(inputStyleSheet)(MessageInput);
