const getPercentage = (value, min, max) => {
  let percentage = (value - min) / (max - min);

  if (isNaN(percentage)) { // eslint-disable-line no-restricted-globals
    percentage = 0;
  }

  return percentage;
};

export default getPercentage;
