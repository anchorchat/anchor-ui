import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function label(overrideStyle) {
  return combineStyles(styles.label, overrideStyle);
}

export default {
  root,
  label
};
