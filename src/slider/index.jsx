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

const minMaxProptype = (props, propName, componentName, ...rest) => {
  const error = PropTypes.number(props, propName, componentName, ...rest);
  if (error !== null) {
    return error;
  }

  if (props.min >= props.max) {
    const errorMsg = (propName === 'min') ? 'min should be less than max' : 'max should be greater than min';
    return new Error(errorMsg);
  }

  return null;
};

const valueInRangePropType = (props, propName, componentName, ...rest) => {
  const error = PropTypes.number(props, propName, componentName, ...rest);
  if (error !== null) {
    return error;
  }

  const value = props[propName];
  if (value < props.min || props.max < value) {
    return new Error(`${propName} should be within the range specified by min and max`);
  }

  return null;
};

Slider.displayName = 'Slider';

Slider.propTypes = {
  /** Change the slider's value */
  onChange: PropTypes.func.isRequired,
  /** The slider's value. Cannot be outside of the range of min and max */
  value: valueInRangePropType,
  /** The slider's label */
  label: PropTypes.node.isRequired,
  /** The slider's name */
  name: PropTypes.string.isRequired,
  /** The slider's max length. Cannot be equal to min. */
  max: minMaxProptype,
  /** The slider's min length. Cannot be equal to max. */
  min: minMaxProptype,
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
  max: 1,
  min: 0,
  value: 0,
  step: null,
  sliderRef: null,
  disabled: false,
  error: null,
  errorStyle: {}
};

export default pure(Radium(Slider));
