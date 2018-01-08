import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const listHeader = overrideStyle => combineStyles(styles.listHeader, overrideStyle);

export default {
  root,
  listHeader
};
