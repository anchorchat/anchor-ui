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

const bar = (color = colors.theme, myMessage, played = 0) => {
  let style = combineStyles(styles.bar, { backgroundColor: color, width: `${played * 100}%` });

  if (myMessage) {
    style = combineStyles(style, { backgroundColor: colors.white });
  }

  return style;
};

export default {
  root,
  bar
};
