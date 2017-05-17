import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function root(color = colors.theme, overrideStyle) {
  let style = styles.root;

  style = combineStyles(style, { backgroundColor: color });

  return combineStyles(style, overrideStyle);
}

export default {
  root
};
