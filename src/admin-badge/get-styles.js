import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (color = colors.theme, inverted, overrideStyle) => {
  const style = combineStyles(styles.root, { backgroundColor: color, border: `1px solid ${color}` });
  const invertedStyle = combineStyles(styles.inverted, { color });

  if (inverted) {
    return combineStyles(combineStyles(style, invertedStyle), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
};

export default {
  root
};
