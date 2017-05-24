import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(position, overrideStyle) {
  return combineStyles(combineStyles(styles.root, position), overrideStyle);
}

function header(overrideStyle) {
  return combineStyles(styles.header, overrideStyle);
}

export default {
  root,
  header
};
