import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function categories(overrideStyle) {
  return combineStyles(styles.categories, overrideStyle);
}

function categoriesCategory(overrideStyle) {
  return combineStyles(styles.categories.category, overrideStyle);
}

function category(overrideStyle) {
  return combineStyles(styles.category, overrideStyle);
}

function categoryEmoji(overrideStyle) {
  return combineStyles(styles.category.emoji, overrideStyle);
}

export default {
  root,
  categories,
  categoriesCategory,
  category,
  categoryEmoji
};
