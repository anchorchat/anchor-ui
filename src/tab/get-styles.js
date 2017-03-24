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

function label(selected, overrideStyle) {
  let style = styles.label;

  if (selected) {
    style = combineStyles(styles.label, { transform: 'none' });
  }

  return combineStyles(style, overrideStyle);
}

function icon(selected, overrideStyle) {
  let style = styles.icon;

  if (selected) {
    style = combineStyles(styles, { transform: 'none' });
  }

  return combineStyles(style, overrideStyle);
}

function badge(overrideStyle) {
  return combineStyles(styles.badge, overrideStyle);
}

export default {
  root,
  label,
  icon,
  badge
};
