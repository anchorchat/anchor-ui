import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function root(color = colors.theme, iconElement, active, overrideStyle) {
  let style = styles.root;

  if (iconElement) {
    style = combineStyles(style, { paddingLeft: '40px' });
  }

  if (active) {
    style = combineStyles(style, { color, paddingRight: '40px' });
  }

  return combineStyles(style, overrideStyle);
}

function text(overrideStyle) {
  return combineStyles(styles.text, overrideStyle);
}

function icon(overrideStyle) {
  return combineStyles(styles.icon, overrideStyle);
}

function activeIcon(overrideStyle) {
  return combineStyles(styles.activeIcon, overrideStyle);
}

export default {
  root,
  text,
  icon,
  activeIcon
};
