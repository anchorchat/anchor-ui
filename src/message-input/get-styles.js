import styles from './styles';
import combineStyles from '../internal/combine-styles';

const root = (disabled, height = '48px', multiLine, overrideStyle) => {
  let style = combineStyles(styles.root, { height });

  if (multiLine) {
    style = combineStyles(style, { alignItems: 'flex-end' });
  }

  if (disabled) {
    style = combineStyles(style, styles.disabled);
  }

  return combineStyles(style, overrideStyle);
};

const input = overrideStyle => combineStyles(styles.input, overrideStyle);
const placeholder = overrideStyle => combineStyles(styles.placeholder, overrideStyle);

const textarea = overrideStyle => (
  combineStyles(combineStyles(styles.input, styles.textarea), overrideStyle)
);

export default {
  root,
  input,
  placeholder,
  textarea
};
