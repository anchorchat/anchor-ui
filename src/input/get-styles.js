import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(disabled, overrideStyle) {
  let style = styles.root;

  if (disabled) {
    style = combineStyles(style, styles.disabled);
  }

  return combineStyles(style, overrideStyle);
}

function label(overrideStyle) {
  return combineStyles(styles.label, overrideStyle);
}

function input(overrideStyle) {
  return combineStyles(styles.input, overrideStyle);
}

function error(overrideStyle) {
  return combineStyles(styles.error, overrideStyle);
}

export default {
  root,
  label,
  input,
  error
};
