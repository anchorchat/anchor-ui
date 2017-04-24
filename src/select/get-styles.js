import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import styles from './styles';
import darken from '../internal/darken';

function icon(open, overrideStyle) {
  let style = styles.icon;

  if (open) {
    style = combineStyles(style, { transform: 'rotate(180deg)' });
  }

  return combineStyles(style, overrideStyle);
}

function header(themeColor, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = combineStyles(
    styles.header,
    {
      backgroundColor: color,
      ':hover': {
        backgroundColor: darken(color, 0.05)
      },
      ':active': {
        backgroundColor: darken(color, 0.15)
      }
    }
  );

  return combineStyles(style, overrideStyle);
}

function error(overrideStyle) {
  return combineStyles(styles.error, overrideStyle);
}

export default { icon, header, error };
