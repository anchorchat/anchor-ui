import styles from './styles';
import combineStyles from '../internal/combine-styles';

function hr(type, overrideStyle) {
  return combineStyles(styles.hr, overrideStyle);
}

function text(type, overrideStyle) {
  return combineStyles(styles.text, overrideStyle);
}

export default {
  hr,
  text
};
