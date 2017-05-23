import styles from './styles';
import combineStyles from '../internal/combine-styles';

function hr(overrideStyle) {
  return combineStyles(styles.hr, overrideStyle);
}

function text(overrideStyle) {
  return combineStyles(styles.text, overrideStyle);
}

export default {
  hr,
  text
};
