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

function header(errorMessage = null, themeColor, overrideStyle) {
  const color = themeColor || colors.theme;

  let style = combineStyles(
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

  if (errorMessage) {
    style = combineStyles(style, { border: `1px solid ${colors.error}` });
  }

  return combineStyles(style, overrideStyle);
}

function error(overrideStyle) {
  return combineStyles(styles.error, overrideStyle);
}

export default { icon, header, error };
