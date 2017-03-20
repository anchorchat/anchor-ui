import styles from './styles';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

function root(color = colors.theme, selected, overrideStyle) {
  let style = styles.root;

  if (selected) {
    style = combineStyles(style, { opacity: 1, borderBottom: `3px solid ${color}` });
  }

  return combineStyles(style, overrideStyle);
}

function label(overrideStyle) {
  return combineStyles(styles.label, overrideStyle);
}

function icon(overrideStyle) {
  return combineStyles(styles.icon, overrideStyle);
}

export default {
  root,
  label,
  icon
};
