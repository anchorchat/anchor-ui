import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function list(overrideStyle) {
  return combineStyles(styles.list, overrideStyle);
}

export default {
  root,
  list
};
