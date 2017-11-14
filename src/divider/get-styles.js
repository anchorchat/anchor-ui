import styles from './styles';
import combineStyles from '../internal/combine-styles';

const hr = overrideStyle => combineStyles(styles.hr, overrideStyle);
const text = overrideStyle => combineStyles(styles.text, overrideStyle);

export default {
  hr,
  text
};
