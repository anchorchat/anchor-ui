import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

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

function getPercent(value, min, max) {
  let percent = (value - min) / (max - min);
  if (isNaN(percent)) {
    percent = 0;
  }

  return percent;
}

/** General purpose form slider */
class Slider extends Component {
  static displayName = 'Slider';

  static propTypes = {
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

  render() {
    const {
      name,
      label,
      onChange,
      value,
      max,
      min,
      step,
      sliderRef,
      disabled,
      errorStyle,
      error,
      ...custom
    } = this.props;
    const percent = getPercent(value, min, max);

    return (
      <section>
        <label htmlFor={name}>{label}</label>
        <div style={styles.sliderRoot}>
          <div style={styles.slider}>
            <div style={combineStyles({ width: `${percent * 100}%` }, styles.sliderFilled)} />
            <div style={combineStyles({ width: `${(1 - percent) * 100}%` }, styles.sliderRemaining)} />
            <div style={combineStyles({ left: `${percent * 100}%` }, styles.sliderButton)} />
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
          ref={sliderRef}
          disabled={disabled}
          {...custom}
        />
        {error ? <span style={errorStyle}>{error}</span> : null}
      </section>
    );
  }
}

export default pure(Radium(Slider));
