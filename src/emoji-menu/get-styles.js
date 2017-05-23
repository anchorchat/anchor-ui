import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function categories(overrideStyle) {
  return combineStyles(styles.categories, overrideStyle);
}

function category(overrideStyle) {
  return combineStyles(styles.categories.category, overrideStyle);
}

export default {
  root,
  categories,
  category
};
