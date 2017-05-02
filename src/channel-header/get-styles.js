import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyle) {
  return combineStyles(styles.root, overrideStyle);
}

function text(overrideStyle) {
  return combineStyles(styles.text, overrideStyle);
}

function leftButton(overrideStyle) {
  return combineStyles(styles.leftButton, overrideStyle);
}

function rightButton(overrideStyle) {
  return combineStyles(styles.rightButton, overrideStyle);
}

export default {
  root,
  text,
  leftButton,
  rightButton
};
