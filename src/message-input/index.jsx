/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import styles from '../style/message-inputs';
import Button from '../button';
import IconSend from '../icons/icon-send';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

function getButtonStyle(style, disabled) {
  if (disabled) {
    return combineStyles(style, styles.disabled);
  }

  return style;
}

function getInputStyle(rightButton, overrideStyle) {
  if (rightButton) {
    return combineStyles(combineStyles(styles.messageInput, styles.leftButton), overrideStyle);
  }

  return combineStyles(styles.messageInput, overrideStyle);
}

/** Message input with send button */
class MessageInput extends Component {
  static displayName = 'MessageInput'

  static propTypes = {
    /** Change the input's value */
    onChange: PropTypes.func.isRequired,
    /** Send a message */
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
    /** Ref function to the element */
    inputRef: PropTypes.func,
    /** Disables the input for the messageInput area */
    disabled: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    maxLength: 500,
    leftButton: null,
    disabled: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext) ||
      Radium.getState(this.state, 'input', ':focus') !== Radium.getState(nextState, 'input', ':focus') ||
      Radium.getState(this.state, 'input', ':disabled') !== Radium.getState(nextState, 'input', ':disabled')
    );
  }

  handleKeyDown(event) {
    const { sendMessage } = this.props;

    if (event.which === 13) {
      sendMessage();
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
      inputStyle
    } = this.props;
    const { color } = this.context;
    const iconColor = color || colors.theme;

    return (
      <section style={combineStyles(styles.input, style)}>
        {
          leftButton
          ? <div style={getButtonStyle(styles.button, disabled)}>
            {leftButton}
          </div>
          : null
        }
        <input
          style={getInputStyle(leftButton, inputStyle)}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type="text"
          onKeyDown={this.handleKeyDown}
          maxLength={maxLength}
          ref={inputRef}
          disabled={disabled}
          key="input"
        />
        <Button
          style={getButtonStyle(styles.rightButton, disabled)}
          iconButton
          onClick={sendMessage}
        >
          <IconSend color={iconColor} />
        </Button>
      </section>
    );
  }
}

export default Radium(MessageInput);
