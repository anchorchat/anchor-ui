import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const container = () => styles.container;

const overlay = (open) => {
  let style = styles.overlay;

  if (open) {
    style = combineStyles(style, { opacity: 1, pointerEvents: 'auto', left: 0 });
  }

  return style;
};

const root = (open, overrideStyle) => {
  let style = styles.root;

  if (open) {
    style = combineStyles(style, { transform: 'none' });
  }

  return combineStyles(style, overrideStyle);
};

const header = (color = colors.theme, icon = false, overrideStyle) => {
  let style = combineStyles(styles.header, { color });

  if (icon) {
    style = combineStyles(style, { padding: '16px 16px 16px 40px' });
  }

  return combineStyles(style, overrideStyle);
};

const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);


export default {
  container,
  overlay,
  root,
  header,
  icon
};
