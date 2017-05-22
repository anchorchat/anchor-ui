import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function root(color = colors.theme, overrideStyle) {
  let style = styles.root;

  style = combineStyles(style, { ':hover': { color } });

  return combineStyles(style, overrideStyle);
}

function input(overrideStyle) {
  return combineStyles(styles.input, overrideStyle);
}

function icon(overrideStyle) {
  return combineStyles(styles.icon, overrideStyle);
}

function label(overrideStyle) {
  return combineStyles(styles.label, overrideStyle);
}

export default {
  root,
  input,
  icon,
  label
};
