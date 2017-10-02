import isNumber from 'lodash/isNumber';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const imageContainer = (height, overrideStyle) => {
  let style = styles.imageContainer;

  if (height && isNumber(height)) {
    style = combineStyles(style, { height: `${height}px` });
  }

  if (height && !isNumber(height)) {
    style = combineStyles(style, { height });
  }

  return combineStyles(style, overrideStyle);
};

const image = (height, overrideStyle) => {
  let style = styles.image;

  if (height && isNumber(height)) {
    style = combineStyles(style, { height: `${height}px` });
  }

  if (height && !isNumber(height)) {
    style = combineStyles(style, { height });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  root,
  imageContainer,
  image
};
