import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(type, overrideStyle) {
  return combineStyles(combineStyles(styles.root, styles[type]), overrideStyle);
}

export default {
  root
};
