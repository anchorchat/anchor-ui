import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const title = overrideStyle => combineStyles(styles.title, overrideStyle);

const subtitle = overrideStyle => combineStyles(styles.subtitle, overrideStyle);

const avatar = overrideStyle => combineStyles(styles.avatar, overrideStyle);

export default {
  root,
  title,
  subtitle,
  avatar
};
