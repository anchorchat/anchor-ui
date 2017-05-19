import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function dot(color = colors.theme, inverted, index, overrideStyle) {
  let style = combineStyles(styles.dot, { backgroundColor: color });

  if (index === 1) {
    style = combineStyles(style, { animationDelay: '.33s' });
  }

  if (index === 2) {
    style = combineStyles(style, { animationDelay: '.66s' });
  }

  if (inverted) {
    return combineStyles(combineStyles(style, styles.inverted), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

export default {
  dot
};
