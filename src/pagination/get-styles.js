import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);
const header = overrideStyle => combineStyles(styles.header, overrideStyle);
const nav = overrideStyle => combineStyles(styles.nav, overrideStyle);
const navButton = overrideStyle => combineStyles(styles.navButton, overrideStyle);
const iconButton = overrideStyle => combineStyles(navButton(styles.iconButton), overrideStyle);

export default {
  root,
  header,
  nav,
  navButton,
  iconButton
};
