import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import styles from './styles';

function root(themeColor, inverted, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = combineStyles(styles.badge, { backgroundColor: color });
  const invertedStyle = combineStyles(styles.inverted, { color });

  if (inverted) {
    return combineStyles(combineStyles(style, invertedStyle), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

export default {
  root
};
