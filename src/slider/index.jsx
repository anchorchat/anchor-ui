import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import styles from './styles';
import getStyles from './get-styles';
import getPercentage from '../internal/get-percentage';
import customPropTypes from '../internal/prop-types';
import withTheme from '../with-theme';

const propTypes = {
  /**
   * Callback fired when Slider's value changes
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /** The slider's value. Must between min and max */
  value: customPropTypes.valueInRange,
  /** The slider's label */
  label: PropTypes.node.isRequired,
  /** The slider's name */
  name: PropTypes.string.isRequired,
  /** The slider's max value. Cannot be equal to min. */
  max: customPropTypes.minMax,
  /** The slider's min value. Cannot be equal to max. */
  min: customPropTypes.minMax,
  /** The slider's step value */
  step: PropTypes.number,
  /** Disables the slider */
  disabled: PropTypes.bool,
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the error element */
  errorStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the label element */
  labelStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.string.isRequired
};

const defaultProps = {
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

const displayName = 'Slider';

/** General purpose form slider */
const Slider = ({
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
  color,
  ...custom
}) => {
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
};

Slider.propTypes = propTypes;
Slider.defaultProps = defaultProps;
Slider.displayName = displayName;

const enhance = compose(
  withTheme,
  Radium
);

export default enhance(Slider);
