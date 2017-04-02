import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from './styles';
import getStyles from './get-styles';

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

function getPercentage(value, min, max) {
  let percentage = (value - min) / (max - min);
  if (isNaN(percentage)) {
    percentage = 0;
  }

  return percentage;
}

/** General purpose form slider */
class Slider extends Component {
  static displayName = 'Slider';

  static propTypes = {
    /** Change the slider's value */
    onChange: PropTypes.func.isRequired,
    /** The slider's value. Must between min and max */
    value: valueInRangePropType,
    /** The slider's label */
    label: PropTypes.node.isRequired,
    /** The slider's name */
    name: PropTypes.string.isRequired,
    /** The slider's max value. Cannot be equal to min. */
    max: minMaxProptype,
    /** The slider's min value. Cannot be equal to max. */
    min: minMaxProptype,
    /** The slider's step value */
    step: PropTypes.number,
    /** Disables the slider */
    disabled: PropTypes.bool,
    /** Display an error message */
    error: PropTypes.node,
    /** Override the styles of the label element */
    errorStyle: PropTypes.instanceOf(Object)
  };

  static defaultProps = {
    max: 1,
    min: 0,
    value: 0,
    step: null,
    sliderRef: null,
    disabled: false,
    error: null,
    errorStyle: {}
  };

  static contextTypes = {
    color: PropTypes.string
  }

  render() {
    const {
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
      ...custom
    } = this.props;
    const { color } = this.context;
    const percent = getPercentage(value, min, max);

    return (
      <section>
        <label htmlFor={name}>{label}</label>
        <div style={styles.sliderRoot}>
          <div style={styles.slider}>
            <div style={getStyles.sliderFilled(color, percent)} />
            <div style={getStyles.sliderRemaining(percent)} />
            <div style={getStyles.sliderButton(color, percent)} />
          </div>
        </div>
        <input
          style={{ margin: 0 }}
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
        {error ? <span style={errorStyle}>{error}</span> : null}
      </section>
    );
  }
}

export default pure(Radium(Slider));
