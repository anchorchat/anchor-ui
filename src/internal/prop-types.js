import PropTypes from 'prop-types';

function minMax(props, propName, componentName, ...rest) {
  const error = PropTypes.number(props, propName, componentName, ...rest);

  if (error !== null) {
    return error;
  }

  if (props.min >= props.max) {
    const errorMsg = (propName === 'min') ? 'min should be less than max' : 'max should be greater than min';
    return new Error(errorMsg);
  }

  return null;
}

function valueInRange(props, propName, componentName, ...rest) {
  const error = PropTypes.number(props, propName, componentName, ...rest);

  if (error !== null) {
    return error;
  }

  const value = props[propName];

  if (value < props.min || props.max < value) {
    return new Error(`${propName} should be within the range specified by min and max`);
  }

  return null;
}

export default {
  minMax,
  valueInRange
};
