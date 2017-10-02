import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const imageContainer = (height, overrideStyle) => {
  let style = styles.imageContainer;

  if (height) {
    style = combineStyles(style, { height: `${height}px` });
  }

  return combineStyles(style, overrideStyle);
};

const image = (height, overrideStyle) => {
  let style = styles.image;

  if (height) {
    style = combineStyles(style, { height: `${height}px` });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  root,
  imageContainer,
  image
};
