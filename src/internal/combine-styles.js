import isObject from 'lodash/isObject';
import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge';

const combineStyles = (style, overrideStyle) => {
  if (isObject(overrideStyle) && !isEmpty(overrideStyle)) {
    return merge({}, style, overrideStyle);
  }

  return style;
};

export default combineStyles;
