import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const text = overrideStyle => combineStyles(styles.text, overrideStyle);

const leftButton = overrideStyle => combineStyles(styles.leftButton, overrideStyle);

const rightButton = overrideStyle => combineStyles(styles.rightButton, overrideStyle);

export default {
  root,
  text,
  leftButton,
  rightButton
};
