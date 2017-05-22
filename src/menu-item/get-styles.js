import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (color = colors.theme, iconElement, active, overrideStyle) => {
  let style = styles.root;

  if (iconElement) {
    style = combineStyles(style, { paddingLeft: '40px' });
  }

  if (active) {
    style = combineStyles(style, { color, paddingRight: '40px' });
  }

  return combineStyles(style, overrideStyle);
};

const text = overrideStyle => combineStyles(styles.text, overrideStyle);

const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);

const activeIcon = overrideStyle => combineStyles(styles.activeIcon, overrideStyle);


export default {
  root,
  text,
  icon,
  activeIcon
};
