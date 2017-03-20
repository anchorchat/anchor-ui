import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function overlay() {
  return styles.overlay;
}

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function content(overrideStyle) {
  return combineStyles(styles.content, overrideStyle);
}

function footer(color = colors.theme, overrideStyle) {
  const style = combineStyles(styles.footer, { background: color });

  return combineStyles(style, overrideStyle);
}

export default {
  overlay,
  root,
  content,
  footer
};
