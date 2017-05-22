import styles from './styles';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

const root = (color = colors.theme, selected, overrideStyle, activeStyle) => {
  const style = styles.root;

  if (selected) {
    return combineStyles(combineStyles(style, { opacity: 1, borderBottom: `3px solid ${color}` }), activeStyle);
  }

  return combineStyles(style, overrideStyle);
};

const label = (selected, overrideStyle, activeStyle) => {
  const style = styles.label;

  if (selected) {
    return combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
};

const icon = (selected, overrideStyle) => combineStyles(styles.icon, overrideStyle);

const badge = overrideStyle => combineStyles(styles.badge, overrideStyle);

export default {
  root,
  label,
  icon,
  badge
};
