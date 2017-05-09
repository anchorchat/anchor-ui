import styles from './styles';
import combineStyles from '../internal/combine-styles';

function button(style, disabled) {
  if (disabled) {
    return combineStyles(style, styles.disabled);
  }

  return style;
}

function input(rightButton, overrideStyle) {
  if (rightButton) {
    return combineStyles(combineStyles(styles.messageInput, styles.leftButton), overrideStyle);
  }

  return combineStyles(styles.messageInput, overrideStyle);
}

export default {
  button,
  input
};
