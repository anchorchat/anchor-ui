import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import styles from './styles';

const root = (overrideStyle, disabled) => {
  let style = styles.root;

  if (disabled) {
    style = combineStyles(style, styles.disabled);
  }

  return combineStyles(style, overrideStyle);
};

const label = overrideStyle => combineStyles(styles.label, overrideStyle);

const filled = (color = colors.theme, percentage, overrideStyle) => {
  const style = combineStyles(styles.filled, { width: `${percentage * 100}%`, backgroundColor: color });

  return combineStyles(style, overrideStyle);
};

const remaining = (percentage, overrideStyle) => {
  const style = combineStyles(styles.remaining, { width: `${(1 - percentage) * 100}%` });

  return combineStyles(style, overrideStyle);
};

const button = (color = colors.theme, percentage, overrideStyle) => {
  let style = combineStyles(styles.button, { left: `${percentage * 100}%` });

  if (percentage !== 0) {
    style = combineStyles(style, { backgroundColor: color, border: `2px solid ${color}` });
  }

  return combineStyles(style, overrideStyle);
};

const error = overrideStyle => combineStyles(styles.error, overrideStyle);


export default {
  root,
  label,
  filled,
  remaining,
  button,
  error
};
