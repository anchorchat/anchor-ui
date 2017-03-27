import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';
import styles from './styles';

function root(themeColor, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = combineStyles(styles.dialog, { background: color });

  return combineStyles(style, overrideStyle);
}

function header(overrideStyle) {
  return combineStyles(styles.header, overrideStyle);
}

function overlay(overrideStyle) {
  return combineStyles(styles.overlay, overrideStyle);
}

export default { root, header, overlay };
