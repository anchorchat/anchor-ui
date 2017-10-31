import styles from './styles';
import combineStyles from '../internal/combine-styles';

const label = overrideStyle => combineStyles(styles.label, overrideStyle);

const error = overrideStyle => combineStyles(styles.error, overrideStyle);

export default {
  label,
  error
};
