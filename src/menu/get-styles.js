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

const header = (color = colors.theme, overrideStyle) => {
  const style = combineStyles(styles.header, { color });

  return combineStyles(style, overrideStyle);
};


export default {
  container,
  overlay,
  root,
  header
};
