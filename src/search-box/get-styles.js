import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function icon(overrideStyle) {
  return combineStyles(styles.icon, overrideStyle);
}

function input(overrideStyle) {
  return combineStyles(styles.input, overrideStyle);
}

export default {
  root,
  icon,
  input
};
