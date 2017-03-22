import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function title(overrideStyle) {
  return combineStyles(styles.title, overrideStyle);
}

function subtitle(overrideStyle) {
  return combineStyles(styles.subtitle, overrideStyle);
}

function avatar(overrideStyle) {
  return combineStyles(styles.avatar, overrideStyle);
}

export default {
  root,
  title,
  subtitle,
  avatar
};
