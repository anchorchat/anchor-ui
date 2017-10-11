import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = (type, overrideStyle) => (
  combineStyles(combineStyles(styles.root, styles[type]), overrideStyle)
);

const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);

const text = overrideStyle => combineStyles(styles.text, overrideStyle);

const button = overrideStyle => combineStyles(styles.button, overrideStyle);

export default {
  root,
  icon,
  text,
  button
};
