import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (color = colors.theme, overrideStyle) => {
  let style = styles.root;

  style = combineStyles(style, { ':hover': { color } });

  return combineStyles(style, overrideStyle);
};

const input = overrideStyle => combineStyles(styles.input, overrideStyle);

const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);

const label = overrideStyle => combineStyles(styles.label, overrideStyle);

export default {
  root,
  input,
  icon,
  label
};
