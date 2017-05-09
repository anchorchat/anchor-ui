/* eslint react/require-default-props: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

function getInputStyle(rightButton, multiline = false, overrideStyle) {
  let style = styles.messageInput;

  if (multiline) {
    style = combineStyles(style, styles.multiline);
  }

  if (rightButton) {
    return combineStyles(combineStyles(style, styles.leftButton), overrideStyle);
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
    disabled: PropTypes.bool,
    /** Enable multiline messages */
    multiline: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    maxLength: 500,
    leftButton: null,
    disabled: false,
    multiline: false
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

    if (event.which === 13 && !event.shiftKey) {
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
      inputStyle,
      multiline,
      ...custom
    } = this.props;
    const { color } = this.context;
    const iconColor = color || colors.theme;

    let input = (
      <input
        style={getInputStyle(leftButton, multiline, inputStyle)}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type="text"
        onKeyDown={this.handleKeyDown}
        maxLength={maxLength}
        ref={inputRef}
        disabled={disabled}
        key="input"
        {...custom}
      />
    );

    if (multiline) {
      input = (
        <textarea
          style={getInputStyle(leftButton, multiline, inputStyle)}
          value={value}
          onChange={onChange}
          format="multiline"
          placeholder={placeholder}
          maxLength={maxLength}
          onKeyDown={this.handleKeyDown}
          ref={inputRef}
          disabled={disabled}
          key="input"
          {...custom}
        />
      );
    }

    return (
      <section style={combineStyles(styles.input, style)}>
        {
          leftButton
          ? <div style={getButtonStyle(styles.button, disabled)}>
            {leftButton}
          </div>
          : null
        }
        {input}
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
