import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const button = (style, disabled) => {
  if (disabled) {
    return combineStyles(style, styles.disabled);
  }

  return style;
};

const input = (rightButton, overrideStyle) => {
  if (rightButton) {
    return combineStyles(combineStyles(styles.messageInput, styles.leftButton), overrideStyle);
  }

  return combineStyles(styles.messageInput, overrideStyle);
};

export default {
  root,
  button,
  input
};
