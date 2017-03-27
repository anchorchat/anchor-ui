import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

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

function input(errorMessage = null, overrideStyle) {
  let style = styles.input;

  if (errorMessage) {
    style = combineStyles(style, { border: `1px solid ${colors.error}`, color: colors.error });
  }

  return combineStyles(style, overrideStyle);
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
