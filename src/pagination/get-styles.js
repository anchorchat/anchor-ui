import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);
const header = overrideStyle => combineStyles(styles.header, overrideStyle);
const nav = (position = 'top', overrideStyle) => {
  let style = styles.nav;

  if (position === 'top') {
    style = combineStyles(style, { marginBottom: '10px', marginTop: 0 });
  }

  if (position === 'bottom') {
    style = combineStyles(style, { marginBottom: 0, marginTop: '10px' });
  }

  return combineStyles(style, overrideStyle);
};
const navButton = overrideStyle => combineStyles(styles.navButton, overrideStyle);
const iconButton = overrideStyle => combineStyles(navButton(styles.iconButton), overrideStyle);

export default {
  root,
  header,
  nav,
  navButton,
  iconButton
};
