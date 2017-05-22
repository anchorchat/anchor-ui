import combineStyles from '../internal/combine-styles';
import styles from './styles';

const root = (overrideStyle) => {
  const style = styles.lightbox;

  return combineStyles(style, overrideStyle);
};

export default { root };
