import colors from '../../settings/colors';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

const header = (
  color = colors.theme,
  myMessage,
  avatar,
  compact,
  iconMenu = false,
  overrideStyle
) => {
  let style = styles.message;

  if (myMessage) {
    style = combineStyles(
      combineStyles(styles.message, styles.myMessage),
      { backgroundColor: color, borderRightColor: color, alignSelf: 'flex-end' }
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

  if (iconMenu) {
    style = combineStyles(style, { padding: '13px 48px 13px 13px' });
  }

  return combineStyles(style, overrideStyle);
};

const body = (myMessage, avatar, compact, overrideStyle) => {
  let style = styles.body;

  if (myMessage) {
    style = combineStyles(style, { marginLeft: '0', marginRight: '16px', alignSelf: 'flex-end' });
  }

  if (avatar) {
    style = combineStyles(style, styles.avatar);
  }

  if (myMessage && avatar) {
    style = combineStyles(style, styles.myAvatar);
  }

  if (compact) {
    style = combineStyles(style, { alignSelf: 'flex-start', marginLeft: 0, marginRight: 0 });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  header,
  body
};
