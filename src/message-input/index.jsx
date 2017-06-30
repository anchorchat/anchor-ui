/* eslint react/require-default-props: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import styles from './styles';
import getStyles from './get-styles';
import Button from '../button';
import IconSend from '../icons/icon-send';
import themeable from '../themeable';

/** Message input with send button */
class MessageInput extends Component {
  static displayName = 'MessageInput'

  static propTypes = {
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
    /** Multi line input. If true, a textarea element will be rendered. */
    multiLine: PropTypes.bool,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    maxLength: 500,
    leftButton: null,
    disabled: false,
    rightButton: null,
    inputRef: null,
    multiLine: false
  }

  constructor() {
    super();

    this.state = {
      height: 48,
      multiLine: false
    };
  }

  handleChange = (event) => {
    const { onChange } = this.props;
    const { height } = this.state;

    this.textarea.style.height = '1px';

    if (this.textarea.scrollHeight > 48) {
      this.setState({
        multiLine: true
      });
    } else if (this.textarea.scrollHeight <= 48) {
      this.setState({
        multiLine: false
      });
    }

    if (this.textarea.scrollHeight !== height) {
      this.setState({
        height: this.textarea.scrollHeight
      });
    }

    this.textarea.style.height = '100%';

    onChange(event);
  }

  handleKeyDown = (event) => {
    if (event.which === 13 && !event.shiftKey) {
      this.handleMessageSend(event);
    }
  }

  handleMessageSend = (event) => {
    const { multiLine, sendMessage } = this.props;
    const { height } = this.state;

    if (multiLine && height > 48) {
      this.setState({
        height: 48,
        multiLine: false
      });
    }

    if (multiLine) {
      event.preventDefault();
    }

    sendMessage(event);
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
      multiLine,
      ...custom
    } = this.props;
    const { height } = this.state;

    let input = (
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
        {...custom}
      />
    );

    if (multiLine) {
      input = (
        <textarea
          style={getStyles.textarea(inputStyle)}
          placeholder={placeholder}
          onChange={this.handleChange}
          value={value}
          type="text"
          onKeyDown={this.handleKeyDown}
          maxLength={maxLength}
          ref={(node) => {
            this.textarea = node;

            if (inputRef) {
              inputRef(node);
            }
          }}
          disabled={disabled}
          key="input"
          {...custom}
        />
      );
    }

    return (
      <section style={getStyles.root(disabled, height, this.state.multiLine, style)}>
        {
          leftButton
          ? <div style={styles.buttons}>
            {leftButton}
          </div>
          : null
        }
        {input}
        <div style={styles.buttons}>
          {rightButton}
          <Button
            iconButton
            onClick={this.handleMessageSend}
          >
            <IconSend color={color} />
          </Button>
        </div>
      </section>
    );
  }
}

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(MessageInput);
