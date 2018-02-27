import colors from '../../settings/colors';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

const root = (color = colors.theme, myMessage, avatar, compact, iconMenu, overrideStyle) => {
  let style = styles.message;

  if (myMessage) {
    style = combineStyles(
      combineStyles(styles.message, styles.myMessage),
      { backgroundColor: color, borderRightColor: color }
    );
  }

  if (avatar) {
    style = combineStyles(style, styles.avatar);
  }

  if (myMessage && avatar) {
    style = combineStyles(style, styles.myAvatar);
  }

  if (compact) {
    style = combineStyles(style, styles.compact);
  }

  if (compact && iconMenu) {
    style = combineStyles(style, { padding: '13px 48px 13px 13px' });
  }

  return combineStyles(style, overrideStyle);
};

const body = (myMessage, fontSize, overrideStyle) => {
  let style = styles.body;

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if (fontSize === 'medium') {
    style = combineStyles(style, { fontSize: '18px', lineHeight: '24px' });
  }

  if (fontSize === 'large') {
    style = combineStyles(style, { fontSize: '22px', lineHeight: '28px' });
  }

  return combineStyles(style, overrideStyle);
};

const mention = (color = colors.theme, myMessage, onClick) => {
  let style = combineStyles(styles.mention, { color });

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if (onClick) {
    style = combineStyles(style, { cursor: 'pointer' });
  }

  return style;
};

export default {
  root,
  body,
  mention
};
