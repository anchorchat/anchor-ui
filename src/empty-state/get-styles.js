import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(image, overrideStyle) {
  const style = combineStyles(styles.emptyState, { backgroundImage: `url(${image})` });

  return combineStyles(style, overrideStyle);
}

export default {
  root
};
