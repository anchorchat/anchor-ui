import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

export default {
  root
};
