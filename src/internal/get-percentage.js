const getPercentage = (value, min, max) => {
  let percentage = (value - min) / (max - min);

  if (isNaN(percentage)) {
    percentage = 0;
  }

  return percentage;
};

export default getPercentage;
