import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function root(color = colors.theme, overrideStyles) {
  let style = styles.root;

  style = combineStyles(style, { ':hover': { color } });

  return combineStyles(style, overrideStyles);
}

function input(overrideStyles) {
  return combineStyles(styles.input, overrideStyles);
}

function label(overrideStyles) {
  return combineStyles(styles.label, overrideStyles);
}

function icon(overrideStyles) {
  return combineStyles(styles.icon, overrideStyles);
}

export default {
  root,
  input,
  label,
  icon
};
