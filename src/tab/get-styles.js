import styles from './styles';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

function root(color = colors.theme, selected, overrideStyle, activeStyle) {
  const style = styles.root;

  if (selected) {
    return combineStyles(combineStyles(style, { opacity: 1, borderBottom: `3px solid ${color}` }), activeStyle);
  }

  return combineStyles(style, overrideStyle);
}

function label(selected, overrideStyle, activeStyle) {
  const style = styles.label;

  if (selected) {
    return combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
}

function icon(selected, overrideStyle) {
  return combineStyles(styles.icon, overrideStyle);
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
