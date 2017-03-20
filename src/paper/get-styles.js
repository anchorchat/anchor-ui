import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(depth = 1, overrideStyle) {
  let style = styles.root;

  style = combineStyles(style, { boxShadow: styles.depthShadows[depth - 1] });

  return combineStyles(style, overrideStyle);
}

export default {
  root
};
