/* eslint react/require-default-props: 0 */
import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import shallowEqual from 'recompose/shallowEqual';
import getClassNames from '../internal/get-class-names';
import inputStyleSheet from '../style/inputs';

/**
 * Input styling
 */
class Input extends Component {
  static propTypes = {
    /**
     * Change the input's value
     */
    onChange: PropTypes.func.isRequired,
    /**
     * The input's value
     */
    value: PropTypes.string.isRequired,
    /**
     * Type of input
     */
    type: PropTypes.string.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        inputWrapper: PropTypes.string.isRequired,
        input: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    /**
     * The input's label
     */
    label: PropTypes.string.isRequired,
    /**
     * The input's name
     */
    name: PropTypes.string.isRequired,
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the input element
     */
    inputStyle: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the label element
     */
    labelStyle: PropTypes.instanceOf(Object),
    /**
     * The input's max length
     */
    maxLength: PropTypes.number,
    /**
     * Ref function to the element
     */
    inputRef: PropTypes.func
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    labelStyle: {},
    maxLength: 500,
    leftButton: null
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

  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(this.props, nextProps));
  }

  render() {
    const { onChange, value, maxLength, label, name, type, inputRef } = this.props;
    const { className, inputClassName, labelClassName } = this.state;

    return (
      <section className={className}>
        <label className={labelClassName} htmlFor={name}>{label}</label>
        <input
          className={inputClassName}
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
