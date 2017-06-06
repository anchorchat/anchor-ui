import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = (disabled, overrideStyle) => {
  const style = styles.root;

  if (disabled) {
    return combineStyles(style, styles.disabled);
  }

  return combineStyles(style, overrideStyle);
};

const input = overrideStyle => combineStyles(styles.input, overrideStyle);

export default {
  root,
  input
};
