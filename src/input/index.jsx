import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

/** General purpose form input */
class Input extends Component {
  constructor() {
    super();

    this.state = {
      height: 32
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

  render() {
    const {
      onChange,
      value,
      maxLength,
      label,
      name,
      type,
      style,
      inputStyle,
      labelStyle,
      disabled,
      error,
      errorStyle,
      placeholder,
      placeholderStyle,
      multiLine,
      ...custom
    } = this.props;
    const { height } = this.state;

    let input = (
      <input
        className="input"
        style={getStyles.input(error, inputStyle)}
        onChange={onChange}
        value={value}
        type={type}
        maxLength={maxLength}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        {...custom}
      />
    );

    if (multiLine) {
      input = (
        <textarea
          className="input"
          style={getStyles.textarea(height, error, inputStyle)}
          onChange={this.handleChange}
          value={value}
          type={type}
          maxLength={maxLength}
          id={name}
          placeholder={placeholder}
          ref={node => (this.textarea = node)}
          disabled={disabled}
          {...custom}
        />
      );
    }

    return (
      <section style={getStyles.root(disabled, style)}>
        <label style={getStyles.label(labelStyle)} htmlFor={name}>{label}</label>
        {input}
        <Style
          rules={{
            '.input::placeholder': combineStyles({ color: colors.placeholderText }, placeholderStyle)
          }}
        />
        {error ? <span style={getStyles.error(errorStyle)}>{error}</span> : null}
      </section>
    );
  }
}

Input.displayName = 'Input';

Input.propTypes = {
  /**
   * Callback fired when the Input's value is changed
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /** The input's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Type of input */
  type: PropTypes.string,
  /** Type of input */
  placeholder: PropTypes.string,
  /** The input's label */
  label: PropTypes.node,
  /** The input's name */
  name: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the input element */
  inputStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object),
  /** The input's max length */
  maxLength: PropTypes.number,
  /** Disables the input */
  disabled: PropTypes.bool,
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the error element */
  errorStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the placeholder */
  placeholderStyle: PropTypes.instanceOf(Object),
  /** Multi line input. If true, a textarea element will be rendered. */
  multiLine: PropTypes.bool
};

Input.defaultProps = {
  style: {},
  inputStyle: {},
  labelStyle: {},
  maxLength: 500,
  disabled: false,
  error: null,
  type: 'text',
  errorStyle: {},
  placeholder: '',
  label: null,
  placeholderStyle: {},
  multiLine: false
};

export default pure(Radium(Input));
