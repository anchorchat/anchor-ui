import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from './styles';
import getStyles from './get-styles';
import getPercentage from '../internal/get-percentage';
import propTypes from '../internal/prop-types';

/** General purpose form slider */
function Slider({
  name,
  label,
  onChange,
  value,
  max,
  min,
  step,
  disabled,
  errorStyle,
  error,
  style,
  labelStyle,
  ...custom
}, { color }
) {
  const percentage = getPercentage(value, min, max);

  return (
    <section style={getStyles.root(style, disabled)}>
      <label style={getStyles.label(labelStyle)} htmlFor={name}>{label}</label>
      <div style={styles.sliderRoot}>
        <div style={styles.slider}>
          <div style={getStyles.filled(color, percentage)} />
          <div style={getStyles.remaining(percentage)} />
          <div style={getStyles.button(color, percentage)} />
        </div>
        <input
          style={styles.input}
          onChange={onChange}
          value={value}
          type="range"
          max={max}
          min={min}
          id={name}
          step={step}
          disabled={disabled}
          {...custom}
        />
      </div>
      {error ? <span style={getStyles.error(errorStyle)}>{error}</span> : null}
    </section>
  );
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  /** Change the slider's value */
  onChange: PropTypes.func.isRequired,
  /** The slider's value. Must between min and max */
  value: propTypes.valueInRange,
  /** The slider's label */
  label: PropTypes.node.isRequired,
  /** The slider's name */
  name: PropTypes.string.isRequired,
  /** The slider's max value. Cannot be equal to min. */
  max: propTypes.minMax,
  /** The slider's min value. Cannot be equal to max. */
  min: propTypes.minMax,
  /** The slider's step value */
  step: PropTypes.number,
  /** Disables the slider */
  disabled: PropTypes.bool,
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the error element */
  errorStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object)
};

Slider.defaultProps = {
  max: 1,
  min: 0,
  value: 0,
  step: null,
  disabled: false,
  error: null,
  errorStyle: {},
  style: {},
  labelStyle: {}
};

Slider.contextTypes = {
  color: PropTypes.string
};

export default pure(Radium(Slider));
