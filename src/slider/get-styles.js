import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import styles from './styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function label(overrideStyle) {
  return combineStyles(styles.label, overrideStyle);
}

function filled(color = colors.theme, percentage, overrideStyle) {
  const style = combineStyles(styles.filled, { width: `${percentage * 100}%`, backgroundColor: color });

  return combineStyles(style, overrideStyle);
}

function remaining(percentage, overrideStyle) {
  const style = combineStyles(styles.remaining, { width: `${(1 - percentage) * 100}%` });

  return combineStyles(style, overrideStyle);
}

function button(color = colors.theme, percentage, overrideStyle) {
  let style = combineStyles(styles.button, { left: `${percentage * 100}%` });

  if (percentage !== 0) {
    style = combineStyles(style, { backgroundColor: color, border: `2px solid ${color}` });
  }

  return combineStyles(style, overrideStyle);
}

function error(overrideStyle) {
  return combineStyles(styles.error, overrideStyle);
}

export default {
  root,
  label,
  filled,
  remaining,
  button,
  error
};
