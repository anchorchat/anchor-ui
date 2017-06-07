import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import darken from '../internal/darken';
import styles from './styles';

const root = (
  color = colors.theme,
  active,
  rightButton,
  avatar,
  secondaryLine = null,
  overrideStyle
) => {
  let style = styles.root;

  const activeStyle = combineStyles(
    styles.root,
    {
      backgroundColor: color,
      ':hover': { backgroundColor: darken(color, 0.05) },
      ':active': { backgroundColor: darken(color, 0.15) }
    }
  );

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  if (secondaryLine) {
    style = combineStyles(style, { height: '52px' });
  }

  return combineStyles(style, overrideStyle);
};

const text = (textStyle, active, textBadge, overrideStyle) => {
  let style = textStyle;

  if (active) {
    style = combineStyles(style, { color: colors.white });
  }

  if (textBadge) {
    style = combineStyles(style, { lineHeight: '22px', marginTop: 0 });
  }

  return combineStyles(style, overrideStyle);
};

const nestedListButton = (open) => {
  let style = styles.button;

  if (open) {
    style = combineStyles(style, { transform: 'rotate(180deg)' });
  }

  return style;
};

export default { root, text, nestedListButton };
