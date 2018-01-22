// 8-1-17
// Not using lodash, this because isNumber(NaN) returns true
// The lodash docs say,
// Note: To exclude Infinity, -Infinity, and NaN,
// which are classified as numbers, use the _.isFinite method.

const getPercentage = (value, min, max) => {
  let percentage = (value - min) / (max - min);

  if (isNaN(percentage)) { // eslint-disable-line no-restricted-globals
    percentage = 0;
  }

  return percentage;
};

export default getPercentage;
