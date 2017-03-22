import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

/** General purpose form input */
function Input({
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
  ...custom
}) {
  return (
    <section style={getStyles.root(disabled, style)}>
      <label style={getStyles.label(labelStyle)} htmlFor={name}>{label}</label>
      <input
        style={getStyles.input(inputStyle)}
        onChange={onChange}
        value={value}
        type={type}
        maxLength={maxLength}
        id={name}
        ref={inputRef}
        {...custom}
      />
    </section>
  );
}

Input.displayName = 'Input';

Input.propTypes = {
  /** Change the input's value */
  onChange: PropTypes.func.isRequired,
  /** The input's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Type of input */
  type: PropTypes.string.isRequired,
  /** The input's label */
  label: PropTypes.node.isRequired,
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
  disabled: PropTypes.bool
};

Input.defaultProps = {
  style: {},
  inputStyle: {},
  labelStyle: {},
  maxLength: 500,
  inputRef: null,
  disabled: false
};

export default pure(Radium(Input));
