import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';
import darken from '../internal/darken';

function root(color = colors.theme, inverted, iconButton, disabled, flatButton, overrideStyle) {
  let style = combineStyles(
    styles.button,
    {
      backgroundColor: color,
      ':hover': { backgroundColor: darken(color, 0.15) },
      ':active': { backgroundColor: darken(color, 0.25) }
    }
  );
  const invertedStyle = combineStyles(styles.inverted, { color });

  if (iconButton) {
    style = styles.iconButton;
  }

  if (disabled) {
    style = combineStyles(style, styles.disabled);
  }

  if (flatButton) {
    style = combineStyles(style, styles.flatButton);
  }

  if (inverted) {
    return combineStyles(combineStyles(style, invertedStyle), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

export default {
  root
};
