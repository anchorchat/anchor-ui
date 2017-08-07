import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const header = (avatar = null, overrideStyle) => {
  let style = {};

  if (avatar) {
    style = combineStyles(style, { maxWidth: 'calc(100% - 56px)' });
  }

  return combineStyles(style, overrideStyle);
};

const title = overrideStyle => combineStyles(styles.title, overrideStyle);

const subtitle = overrideStyle => combineStyles(styles.subtitle, overrideStyle);

const avatar = overrideStyle => combineStyles(styles.avatar, overrideStyle);

export default {
  root,
  header,
  title,
  subtitle,
  avatar
};
