import styles from './styles';
import combineStyles from '../internal/combine-styles';

export default {
  root: overrideStyle => combineStyles(styles.root, overrideStyle),
  listHeader: overrideStyle => combineStyles(styles.listHeader, overrideStyle),
  list: overrideStyle => combineStyles(styles.list, overrideStyle)
};
