import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const label = overrideStyle => combineStyles(styles.label, overrideStyle);

const error = overrideStyle => combineStyles(styles.error, overrideStyle);

export default {
  root,
  label,
  error
};
