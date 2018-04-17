import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import compose from 'recompose/compose';
import styles from './styles';
import getStyles from './get-styles';
import Button from '../button';
import IconSend from '../icons/icon-send';
import themeable from '../themeable';
import md from '../internal/mobile-detect';

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
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the input element */
  inputStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** The input's max length */
  maxLength: PropTypes.number,
  /** Left-hand side placed button */
  leftButton: PropTypes.node,
  /** Right-hand side placed button */
  rightButton: PropTypes.node,
  /** Disables the input for the messageInput area */
  disabled: PropTypes.bool,
  /** Multi line input. If true, a textarea element will be rendered. */
  multiLine: PropTypes.bool,
  /** Multi line input's max visible rows. */
  maxRows: PropTypes.number,
  /** Multi line input's row height. */
  rowHeight: PropTypes.number,
  /** Color for the send button icon */
  sendIconColor: PropTypes.string,
  /** Custom send button icon */
  sendIcon: PropTypes.node,
  /** Override the styles of the input's placeholder */
  placeholderStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
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
  multiLine: false,
  maxRows: 12,
  sendIconColor: '',
  sendIcon: null,
  rowHeight: 16
};

const displayName = 'MessageInput';

/** Message input with send button */
class MessageInput extends Component {
  constructor() {
    super();

    this.state = {
      height: 48,
      multiLine: false
    };
    this.input = createRef();
    this.textarea = createRef();
  }

  componentDidMount() {
    const { multiLine } = this.props;

    if (multiLine && this.textarea && this.textarea.current) {
      this.setTextareaHeight();
    }
  }

  setTextareaHeight = () => {
    const { rowHeight, maxRows } = this.props;
    const { height } = this.state;
    const { current: textarea } = this.textarea;

    textarea.style.height = '1px';

    if (textarea.scrollHeight > 48) {
      this.setState({
        multiLine: true
      });
    } else {
      this.setState({
        multiLine: false
      });
    }

    if (textarea.scrollHeight === height || textarea.scrollHeight > (maxRows * rowHeight)) {
      textarea.scrollTop = textarea.scrollHeight;
      textarea.style.height = '100%';

      return false;
    }

    if (textarea.scrollHeight < 49) {
      this.setState({
        height: 48
      });
    } else {
      this.setState({
        height: textarea.scrollHeight
      });
    }

    textarea.scrollTop = textarea.scrollHeight;
    textarea.style.height = '100%';

    return false;
  }

  handleChange = (event) => {
    const { onChange } = this.props;

    this.setTextareaHeight();

    onChange(event);
  }

  handleKeyDown = (event) => {
    const { multiLine } = this.props;

    if (md.mobile() && multiLine) {
      return false;
    }

    if (event.which === 13 && !event.shiftKey) {
      return this.handleMessageSend(event);
    }

    return false;
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

  focusInput = () => {
    const { multiLine } = this.props;
    const { current: input } = this.input;
    const { current: textarea } = this.textarea;

    if (multiLine) {
      return textarea.focus();
    }

    return input.focus();
  }

  render() {
    const {
      onChange,
      sendMessage,
      placeholder,
      value,
      maxLength,
      leftButton,
      disabled,
      style,
      inputStyle,
      color,
      rightButton,
      multiLine,
      maxRows,
      sendIconColor,
      sendIcon,
      placeholderStyle,
      rowHeight,
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
        ref={this.input}
        disabled={disabled}
        key="input"
        className="message-input"
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
          rows={maxRows}
          ref={this.textarea}
          disabled={disabled}
          key="input"
          className="message-input"
          {...custom}
        />
      );
    }

    return (
      <section style={getStyles.root(disabled, height, this.state.multiLine, style)}>
        {
          leftButton
          ? (
            <div style={styles.buttons}>
              {leftButton}
            </div>
          )
          : null
        }
        {input}
        <div style={styles.buttons}>
          {rightButton}
          <Button
            iconButton
            onClick={this.handleMessageSend}
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

MessageInput.propTypes = propTypes;
MessageInput.defaultProps = defaultProps;
MessageInput.displayName = displayName;

const enhance = compose(
  themeable(),
  Radium
);

MessageInput.displayName = displayName;
MessageInput.propTypes = propTypes;
MessageInput.defaultProps = defaultProps;

export default enhance(MessageInput);
