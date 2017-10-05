import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const itemContainer = (height, enableLightbox, overrideStyle) => {
  let style = styles.itemContainer;

  if (height) {
    style = combineStyles(style, { height: `${height}px` });
  }

  if (enableLightbox) {
    style = combineStyles(style, { cursor: 'pointer' });
  }

  return combineStyles(style, overrideStyle);
};

const item = (height, overrideStyle) => {
  let style = styles.item;

  if (height) {
    style = combineStyles(style, { height: `${height}px` });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  root,
  itemContainer,
  item
};
