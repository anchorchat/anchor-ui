import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import styles from './styles';
import darken from '../internal/darken';

const icon = (open, overrideStyle) => {
  let style = styles.icon;

  if (open) {
    style = combineStyles(style, { transform: 'rotate(180deg) translateY(50%)' });
  }

  return combineStyles(style, overrideStyle);
};

const header = (errorMessage = null, color = colors.theme, overrideStyle) => {
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
};

const error = overrideStyle => combineStyles(styles.error, overrideStyle);

export default { icon, header, error };
