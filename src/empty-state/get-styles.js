import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = (image, overrideStyle) => {
  const style = combineStyles(styles.emptyState, { backgroundImage: `url(${image})` });

  return combineStyles(style, overrideStyle);
};

const heading = overrideStyle => combineStyles(styles.heading, overrideStyle);

const body = overrideStyle => combineStyles(styles.body, overrideStyle);

export default {
  root,
  heading,
  body
};
