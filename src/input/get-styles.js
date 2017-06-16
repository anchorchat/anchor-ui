import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (disabled, overrideStyle) => {
  let style = styles.root;

  if (disabled) {
    style = combineStyles(style, styles.disabled);
  }

  return combineStyles(style, overrideStyle);
};

const label = overrideStyle => combineStyles(styles.label, overrideStyle);

const input = (errorMessage = null, overrideStyle) => {
  let style = styles.input;

  if (errorMessage) {
    style = combineStyles(style, { border: `1px solid ${colors.error}`, color: colors.error });
  }

  return combineStyles(style, overrideStyle);
};

const textarea = (height = 32, errorMessage = null, overrideStyle) => {
  let style = combineStyles(styles.input, styles.textarea);
  style = combineStyles(style, { height });

  if (errorMessage) {
    style = combineStyles(style, { border: `1px solid ${colors.error}`, color: colors.error });
  }

  return combineStyles(style, overrideStyle);
};


const error = overrideStyle => combineStyles(styles.error, overrideStyle);

export default {
  root,
  label,
  input,
  error,
  textarea
};
