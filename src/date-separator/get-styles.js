import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);
const hr = overrideStyle => combineStyles(styles.hr, overrideStyle);
const text = overrideStyle => combineStyles(styles.text, overrideStyle);

export default {
  root,
  hr,
  text
};
