// date: 28-11 '17
// This function should make of lodash isNumber()
// however this doesn't work as expected
// Should remove isNaN when isNumber works as intended
const getPercentage = (value, min, max) => {
  let percentage = (value - min) / (max - min);

  if (isNaN(percentage)) { // eslint-disable-line no-restricted-globals
    percentage = 0;
  }

  return percentage;
};

export default getPercentage;
