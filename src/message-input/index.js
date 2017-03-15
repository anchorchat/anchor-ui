/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import { TextInput, View } from 'react-native';
import shallowEqual from 'recompose/shallowEqual';
import styles from '../style/message-inputs';
import Button from '../button';
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
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the input element */
    inputStyle: PropTypes.instanceOf(Object),
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
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const {
      onChange,
      sendMessage,
      value,
      leftButton,
      inputRef,
      disabled,
      style,
      inputStyle
    } = this.props;

    console.log('test');

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
          onChangeText={onChange}
          value={value}
          ref={inputRef}
          onSubmitEditing={sendMessage}
          disabled={disabled}
          returnKeyType="send"
          key="input"
        />
        <Button
          style={getButtonStyle(styles.rightButton, disabled)}
          iconButton
          onClick={sendMessage}
        />
      </View>
    );
  }
}

export default MessageInput;
