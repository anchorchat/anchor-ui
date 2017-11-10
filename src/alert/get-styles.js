import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = (type, overrideStyle) => (
  combineStyles(combineStyles(styles.root, styles[type]), overrideStyle)
);

const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);

const text = (hideAlert = null, overrideStyle) => {
  let style = styles.text;

  if (hideAlert) {
    style = combineStyles(style, { paddingRight: '40px' });
  }

  return combineStyles(style, overrideStyle);
};

const button = overrideStyle => combineStyles(styles.button, overrideStyle);

export default {
  root,
  icon,
  text,
  button
};
