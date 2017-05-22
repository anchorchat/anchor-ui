import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (color = colors.theme, overrideStyle, left, right) => {
  let style = combineStyles(styles.root, { backgroundColor: color });

  if (left) {
    style = combineStyles(style, { paddingLeft: '56px' });
  }

  if (right) {
    style = combineStyles(style, { paddingRight: '56px' });
  }

  return combineStyles(style, overrideStyle);
};

const text = overrideStyle => combineStyles(styles.text, overrideStyle);

const leftButton = overrideStyle => combineStyles(styles.leftButton, overrideStyle);

const rightButton = overrideStyle => combineStyles(styles.rightButton, overrideStyle);

const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);

export default {
  root,
  text,
  leftButton,
  rightButton,
  icon
};
