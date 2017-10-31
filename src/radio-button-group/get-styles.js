import styles from './styles';
import combineStyles from '../internal/combine-styles';

const buttons = overrideStyle => combineStyles(styles.buttons, overrideStyle);
const label = overrideStyle => combineStyles(styles.label, overrideStyle);
const error = overrideStyle => combineStyles(styles.error, overrideStyle);

export default {
  buttons,
  label,
  error
};
