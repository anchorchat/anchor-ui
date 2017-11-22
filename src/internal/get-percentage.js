import isNumber from 'lodash/isNumber';

const getPercentage = (value, min, max) => {
  let percentage = (value - min) / (max - min);

  if (!isNumber(percentage)) {
    percentage = 0;
  }

  return percentage;
};

export default getPercentage;
