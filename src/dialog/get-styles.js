import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';
import styles from './styles';

function root(color = colors.theme, overrideStyle) {
  const style = combineStyles(styles.dialog, { backgroundColor: color });

  return combineStyles(style, overrideStyle);
}

function header(overrideStyle) {
  return combineStyles(styles.header, overrideStyle);
}

export default { root, header };
