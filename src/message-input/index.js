/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  View
} from 'react-native';
import Uranium from 'uranium';
import shallowEqual from 'recompose/shallowEqual';
import styles from '../style/message-inputs';
import Button from '../button';
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
      Uranium.getState(this.state, 'input', ':focus') !== Uranium.getState(nextState, 'input', ':focus') ||
      Uranium.getState(this.state, 'input', ':disabled') !== Uranium.getState(nextState, 'input', ':disabled')
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
      <View style={combineStyles(styles.input, style)}>
        {
          leftButton
          ? <View style={getButtonStyle(styles.button, disabled)}>
            {leftButton}
          </View>
          : null
        }
        <TextInput
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
      </View>
    );
  }
}

export default Uranium(MessageInput);
