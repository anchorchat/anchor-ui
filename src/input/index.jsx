import React from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';
import colors from '../settings/colors';
import fade from '../internal/fade';
import combineStyles from '../internal/combine-styles';

/** General purpose form input */
const Input = ({
  onChange,
  value,
  maxLength,
  label,
  name,
  type,
  inputRef,
  style,
  inputStyle,
  labelStyle,
  disabled,
  error,
  errorStyle,
  placeholder,
  placeholderStyle,
  ...custom
}) => (
  <section style={getStyles.root(disabled, style)}>
    <label style={getStyles.label(labelStyle)} htmlFor={name}>{label}</label>
    <input
      className="input"
      style={getStyles.input(error, inputStyle)}
      onChange={onChange}
      value={value}
      type={type}
      maxLength={maxLength}
      id={name}
      ref={inputRef}
      placeholder={placeholder}
      {...custom}
    />
    <Style
      rules={{
        '.input::placeholder': combineStyles({ color: fade(colors.white, 0.38) }, placeholderStyle)
      }}
    />
    {error ? <span style={getStyles.error(errorStyle)}>{error}</span> : null}
  </section>
);

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
  /** Ref function to the element */
  inputRef: PropTypes.func,
  /** Disables the input */
  disabled: PropTypes.bool,
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the error element */
  errorStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the placeholder */
  placeholderStyle: PropTypes.instanceOf(Object)
};

Input.defaultProps = {
  style: {},
  inputStyle: {},
  labelStyle: {},
  maxLength: 500,
  inputRef: null,
  disabled: false,
  error: null,
  type: 'text',
  errorStyle: {},
  placeholder: '',
  label: null,
  placeholderStyle: {}
};

export default pure(Radium(Input));
