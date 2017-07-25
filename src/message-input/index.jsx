/* eslint react/require-default-props: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import compose from 'recompose/compose';
import styles from './styles';
import getStyles from './get-styles';
import Button from '../button';
import IconSend from '../icons/icon-send';
import themeable from '../themeable';

const displayName = 'MessageInput';

const propTypes = {
  /**
   * Callback fired when MessageInput's value changes
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Callback fired when a message is sent
   *
   * function(event: object) => void
   */
  sendMessage: PropTypes.func.isRequired,
  /** The input's value */
  value: PropTypes.string.isRequired,
  /** The input's placeholder */
  placeholder: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the input element */
  inputStyle: PropTypes.instanceOf(Object),
  /** The input's max length */
  maxLength: PropTypes.number,
  /** Left-hand side placed button */
  leftButton: PropTypes.node,
  /** Right-hand side placed button */
  rightButton: PropTypes.node,
  /** Ref function to the element */
  inputRef: PropTypes.func,
  /** Disables the input for the messageInput area */
  disabled: PropTypes.bool,
  /** Color for the send button icon */
  sendIconColor: PropTypes.string,
  /** Custom send button icon */
  sendIcon: PropTypes.node,
  /** Override the styles of the input's placeholder */
  placeholderStyle: PropTypes.instanceOf(Object),
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  inputStyle: {},
  placeholderStyle: {},
  maxLength: 500,
  leftButton: null,
  disabled: false,
  rightButton: null,
  sendIconColor: '',
  sendIcon: null
};

/** Message input with send button */
class MessageInput extends Component {
  constructor() {
    super();

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    const { sendMessage } = this.props;

    if (event.which === 13) {
      sendMessage(event);
    }
  }

  render() {
    const {
      onChange,
      sendMessage,
      placeholder,
      value,
      maxLength,
      leftButton,
      inputRef,
      disabled,
      style,
      inputStyle,
      color,
      rightButton,
      sendIconColor,
      sendIcon,
      placeholderStyle,
      ...custom
    } = this.props;

    return (
      <section style={getStyles.root(disabled, style)}>
        {
          leftButton
          ? <div style={styles.buttons}>
            {leftButton}
          </div>
          : null
        }
        <input
          style={getStyles.input(inputStyle)}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type="text"
          onKeyDown={this.handleKeyDown}
          maxLength={maxLength}
          ref={inputRef}
          disabled={disabled}
          key="input"
          className="message-input"
          {...custom}
        />
        <div style={styles.buttons}>
          {rightButton}
          <Button
            iconButton
            onClick={sendMessage}
          >
            {sendIcon || <IconSend color={sendIconColor || color} />}
          </Button>
        </div>
        <Style
          rules={{
            '.message-input::placeholder': getStyles.placeholder(placeholderStyle)
          }}
        />
      </section>
    );
  }
}

const enhance = compose(
  themeable(),
  Radium
);

MessageInput.displayName = displayName;
MessageInput.propTypes = propTypes;
MessageInput.defaultProps = defaultProps;

export default enhance(MessageInput);
