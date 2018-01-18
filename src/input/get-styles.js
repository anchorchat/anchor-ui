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

const input = (errorMessage = null, tooltip = null, overrideStyle) => {
  let style = styles.input;

  if (errorMessage) {
    style = combineStyles(style, { border: `1px solid ${colors.error}`, color: colors.error });
  }

  if (tooltip) {
    style = combineStyles(style, { padding: '6.5px 32px 6.5px 6.5px' });
  }

  return combineStyles(style, overrideStyle);
};

const textarea = (errorMessage = null, tooltip = null, overrideStyle) => {
  let style = combineStyles(styles.input, styles.textarea);

  if (errorMessage) {
    style = combineStyles(style, { border: `1px solid ${colors.error}`, color: colors.error });
  }

  if (tooltip) {
    style = combineStyles(style, { padding: '6.5px 32px 6.5px 6.5px' });
  }

  return combineStyles(style, overrideStyle);
};


const error = overrideStyle => combineStyles(styles.error, overrideStyle);

const inputRoot = (height = 32) => combineStyles(styles.inputRoot, { height });

const placeholder = overrideStyle => combineStyles(styles.placeholder, overrideStyle);

const tooltip = overrideStyle => combineStyles(styles.tooltip, overrideStyle);

export default {
  root,
  label,
  input,
  error,
  textarea,
  inputRoot,
  placeholder,
  tooltip
};
