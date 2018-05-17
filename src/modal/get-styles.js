import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const content = overrideStyle => combineStyles(styles.content, overrideStyle);

const footer = (color = colors.theme, overrideStyle) => {
  const style = combineStyles(styles.footer, { backgroundColor: color });

  return combineStyles(style, overrideStyle);
};

const header = overrideStyle => combineStyles(styles.header, overrideStyle);

export default {
  root,
  header,
  content,
  footer
};
