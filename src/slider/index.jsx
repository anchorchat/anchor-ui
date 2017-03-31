import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';

/** General purpose form slider */
function Slider({
  onChange,
  value,
  max,
  min,
  step,
  label,
  name,
  sliderRef,
  disabled,
  error,
  errorStyle,
  ...custom
}) {
  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type="range"
        max={max}
        min={min}
        id={name}
        step={step}
        ref={sliderRef}
        disabled={disabled}
        {...custom}
      />
      {error ? <span style={errorStyle}>{error}</span> : null}
    </section>
  );
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  /** Change the slider's value */
  onChange: PropTypes.func.isRequired,
  /** The slider's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** The slider's label */
  label: PropTypes.node.isRequired,
  /** The slider's name */
  name: PropTypes.string.isRequired,
  /** The slider's max length */
  max: PropTypes.number.isRequired,
  /** The slider's min length */
  min: PropTypes.number.isRequired,
  /** The slider's step length */
  step: PropTypes.number,
  /** Ref function to the element */
  sliderRef: PropTypes.func,
  /** Disables the slider */
  disabled: PropTypes.bool,
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the label element */
  errorStyle: PropTypes.instanceOf(Object)
};

Slider.defaultProps = {
  step: null,
  sliderRef: null,
  disabled: false,
  error: null,
  errorStyle: {}
};

export default pure(Radium(Slider));
