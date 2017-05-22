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

function text(overrideStyle) {
  return combineStyles(styles.text, overrideStyle);
}

function leftButton(overrideStyle) {
  return combineStyles(styles.leftButton, overrideStyle);
}

function rightButton(overrideStyle) {
  return combineStyles(styles.rightButton, overrideStyle);
}

function icon(overrideStyle) {
  return combineStyles(styles.icon, overrideStyle);
}

export default {
  root,
  text,
  leftButton,
  rightButton,
  icon
};
