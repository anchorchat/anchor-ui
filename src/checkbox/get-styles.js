import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (color = colors.theme, overrideStyles) => {
  let style = styles.root;

  style = combineStyles(style, { ':hover': { color } });

  return combineStyles(style, overrideStyles);
};

const input = overrideStyles => combineStyles(styles.input, overrideStyles);

const label = overrideStyles => combineStyles(styles.label, overrideStyles);

const icon = overrideStyles => combineStyles(styles.icon, overrideStyles);

export default {
  root,
  input,
  label,
  icon
};
