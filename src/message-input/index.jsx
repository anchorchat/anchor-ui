/* eslint react/require-default-props: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import styles from '../style/message-inputs';
import Button from '../button';
import IconSend from '../icons/icon-send';
import combineStyles from '../internal/combine-styles';
import themeable from '../themeable';

const getButtonStyle = (style, disabled) => {
  if (disabled) {
    return combineStyles(style, styles.disabled);
  }

  return style;
};

const getInputStyle = (rightButton, overrideStyle) => {
  if (rightButton) {
    return combineStyles(combineStyles(styles.messageInput, styles.leftButton), overrideStyle);
  }

  return combineStyles(styles.messageInput, overrideStyle);
};

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
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    maxLength: 500,
    leftButton: null,
    disabled: false
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
      ...custom
    } = this.props;

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
          {...custom}
        />
        <Button
          style={getButtonStyle(styles.rightButton, disabled)}
          iconButton
          onClick={sendMessage}
        >
          <IconSend color={color} />
        </Button>
      </section>
    );
  }
}

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(MessageInput);
