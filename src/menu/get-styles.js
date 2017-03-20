import styles from './styles';
import combineStyles from '../internal/combine-styles';

function container() {
  return styles.container;
}

function overlay(open) {
  let style = styles.overlay;

  if (open) {
    style = combineStyles(style, { opacity: 1, pointerEvents: 'auto', left: 0 });
  }

  return style;
}

function root(open, overrideStyle) {
  let style = styles.root;

  if (open) {
    style = combineStyles(style, { transform: 'none' });
  }

  return combineStyles(style, overrideStyle);
}

function header(overrideStyle) {
  return combineStyles(styles.header, overrideStyle);
}

export default {
  container,
  overlay,
  root,
  header
};
