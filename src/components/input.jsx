/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import getClassNames from '../internal/get-class-names';
import inputStyleSheet from '../style/inputs';

class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        inputWrapper: PropTypes.string.isRequired,
        input: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    style: PropTypes.instanceOf(Object),
    inputStyle: PropTypes.instanceOf(Object),
    labelStyle: PropTypes.instanceOf(Object),
    maxLength: PropTypes.number,
    inputRef: PropTypes.func
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    labelStyle: {},
    maxLength: 500,
    leftButton: null
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, inputStyle, labelStyle } = props;
    const className = getClassNames(classes, style, 'inputWrapper', 'Input');
    const inputClassName = getClassNames(classes, inputStyle, 'input', 'Input');
    const labelClassName = getClassNames(classes, labelStyle, 'label', 'Input');

    this.state = {
      className,
      inputClassName,
      labelClassName
    };
  }

  render() {
    const { onChange, value, maxLength, label, name, type, inputRef } = this.props;
    const { className, inputClassName, labelClassName } = this.state;

    return (
      <section className={className}>
        <label className={labelClassName} htmlFor={name}>{label}</label>
        <input
          className={classNames(inputClassName)}
          onChange={onChange}
          value={value}
          type={type}
          onKeyDown={this.handleKeyDown}
          maxLength={maxLength}
          id={name}
          ref={inputRef}
        />
      </section>
    );
  }
}

export default injectSheet(inputStyleSheet)(Input);
