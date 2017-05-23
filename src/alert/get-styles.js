import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(type, overrideStyle) {
  return combineStyles(combineStyles(styles.root, styles[type]), overrideStyle);
}

function icon(overrideStyle) {
  return combineStyles(styles.icon, overrideStyle);
}

function text(overrideStyle) {
  return combineStyles(styles.text, overrideStyle);
}

function button(overrideStyle) {
  return combineStyles(styles.button, overrideStyle);
}

export default {
  root,
  icon,
  text,
  button
};
