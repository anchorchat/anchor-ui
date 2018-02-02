import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const itemContainer = (rowHeight, enableLightbox, overrideStyle) => {
  let style = combineStyles(styles.itemContainer, { height: rowHeight });

  if (enableLightbox) {
    style = combineStyles(style, { cursor: 'pointer' });
  }

  return combineStyles(style, overrideStyle);
};

const item = (rowHeight, overrideStyle) => (
  combineStyles(combineStyles(styles.item, { height: rowHeight }), overrideStyle)
);

const colorPlaceholder = (color, originalWidth, originalHeight, rowHeight, overrideStyle) => {
  const width = (originalWidth * rowHeight) / originalHeight;

  const style = combineStyles(styles.item, { backgroundColor: color, width, height: rowHeight });

  return combineStyles(style, overrideStyle);
};

export default {
  root,
  itemContainer,
  item,
  colorPlaceholder
};
