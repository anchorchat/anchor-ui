import styles from './styles';
import combineStyles from '../internal/combine-styles';

function root(overrideStyles) {
  return combineStyles(styles.root, overrideStyles);
}

function input(overrideStyles) {
  return combineStyles(styles.input, overrideStyles);
}

function label(overrideStyles) {
  return combineStyles(styles.label, overrideStyles);
}

function icon(overrideStyles) {
  return combineStyles(styles.icon, overrideStyles);
}

export default {
  root,
  input,
  label,
  icon
};
