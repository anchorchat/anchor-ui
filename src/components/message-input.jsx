/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import shallowEqual from 'recompose/shallowEqual';
import getClassNames from '../internal/get-class-names';
import inputStyleSheet from '../style/message-inputs';
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
        messageInput: PropTypes.string.isRequired,
        leftButton: PropTypes.string.isRequired,
        input: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        rightButton: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.instanceOf(Object),
    inputStyle: PropTypes.instanceOf(Object),
    maxLength: PropTypes.number,
    leftButton: PropTypes.node,
    inputRef: PropTypes.func,
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

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, inputStyle } = props;
    const className = getClassNames(classes, style, 'input', 'MessageInput');
    const inputClassName = getClassNames(classes, inputStyle, 'messageInput', 'MessageInput');

    this.state = {
      className,
      inputClassName
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
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
      sheet: { classes },
      disabled
    } = this.props;
    const { className, inputClassName } = this.state;
    const { color } = this.context;
    const iconColor = color || colors.theme;

    return (
      <section className={className}>
        {
          leftButton
          ? <div className={classNames(classes.button, { [classes.disabled]: disabled })}>
            {leftButton}
          </div>
          : null
        }
        <input
          className={classNames(inputClassName, { [classes.leftButton]: leftButton })}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          type="text"
          onKeyDown={this.handleKeyDown}
          maxLength={maxLength}
          ref={inputRef}
          disabled={disabled}
        />
        <div className={classNames(classes.rightButton, { [classes.disabled]: disabled })}>
          <Button iconButton onClick={sendMessage}>
            <IconSend color={iconColor} />
          </Button>
        </div>
      </section>
    );
  }
}

export default injectSheet(inputStyleSheet)(MessageInput);
