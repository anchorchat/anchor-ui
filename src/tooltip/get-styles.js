import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);
const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);

export default {
  root,
  icon
};
