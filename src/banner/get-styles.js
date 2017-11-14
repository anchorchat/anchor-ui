import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = (type, overrideStyle) => (
  combineStyles(combineStyles(styles.root, styles[type]), overrideStyle)
);

export default {
  root
};
