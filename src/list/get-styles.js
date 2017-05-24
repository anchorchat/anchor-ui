import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function listHeader(overrideStyle) {
  return combineStyles(styles.listHeader, overrideStyle);
}

export default {
  root,
  listHeader
};
