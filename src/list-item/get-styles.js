import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import darken from '../internal/darken';
import styles from './styles';

function root(themeColor, active, rightButton, avatar, overrideStyle) {
  let style = styles.root;

  const color = themeColor || colors.theme;

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

  if (rightButton) {
    style = combineStyles(style, styles.rightButton);
  }

  if (avatar) {
    style = combineStyles(style, styles.leftAvatar);
  }

  return combineStyles(style, overrideStyle);
}

function text(textStyle, active, textBadge, overrideStyle) {
  let style = textStyle;

  if (active) {
    style = combineStyles(style, { color: colors.white });
  }

  if (textBadge) {
    style = combineStyles(style, { lineHeight: '20px', marginTop: 0 });
  }

  return combineStyles(style, overrideStyle);
}

function nestedListButton(open) {
  let style = styles.button;

  if (open) {
    style = combineStyles(style, { transform: 'rotate(180deg)' });
  }

  return style;
}

export default { root, text, nestedListButton };
