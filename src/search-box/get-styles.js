import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);
const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);
const input = overrideStyle => combineStyles(styles.input, overrideStyle);
const placeholder = overrideStyle => combineStyles(styles.placeholder, overrideStyle);

export default {
  root,
  icon,
  input,
  placeholder
};
