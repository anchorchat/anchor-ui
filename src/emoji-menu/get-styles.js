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

function header(overrideStyle) {
  return combineStyles(styles.header, overrideStyle);
}

function modifiers(overrideStyle) {
  return combineStyles(styles.modifiers, overrideStyle);
}

function modifier(active, overrideStyle) {
  let style = styles.modifier;

  if (active) {
    style = combineStyles(style, styles.modifier.active);
  }

  return combineStyles(style, overrideStyle);
}

export default {
  root,
  categories,
  categoriesCategory,
  category,
  categoryEmoji,
  modifiers,
  header,
  modifier
};
