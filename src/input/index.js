import React, { PropTypes } from 'react';
import Uranium from 'uranium';
import pure from 'recompose/pure';
import styles from '../style/inputs';
import combineStyles from '../internal/combine-styles';

/** General purpose form input */
function Input({
  onChange, value, maxLength, label, name, type, inputRef, style, inputStyle, labelStyle
}) {
  return (
    <section style={combineStyles(styles.inputWrapper, style)}>
      <label style={combineStyles(styles.label, labelStyle)} htmlFor={name}>{label}</label>
      <input
        style={combineStyles(styles.input, inputStyle)}
        onChange={onChange}
        value={value}
        type={type}
        maxLength={maxLength}
        id={name}
        ref={inputRef}
      />
    </section>
  );
}

Input.displayName = 'Input';

Input.propTypes = {
  /** Change the input's value */
  onChange: PropTypes.func.isRequired,
  /** The input's value */
  value: PropTypes.string.isRequired,
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
  inputRef: PropTypes.func
};

Input.defaultProps = {
  style: {},
  inputStyle: {},
  labelStyle: {},
  maxLength: 500,
  inputRef: () => {}
};

export default pure(Uranium(Input));
