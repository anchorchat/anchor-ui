import colors from '../../settings/colors';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

const root = (
  color = colors.theme,
  myMessage,
  avatar,
  compact,
  collapsed,
  iconMenu,
  overrideStyle
) => {
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
    style = combineStyles(style, { marginLeft: '0', marginRight: '48px' });
  }

  if (compact) {
    style = combineStyles(style, styles.compact);
  }

  if (compact && collapsed) {
    style = combineStyles(style, { display: 'flex' });
  }

  if (collapsed && iconMenu) {
    style = combineStyles(style, { padding: '13px 48px 13px 13px' });
  }

  return combineStyles(style, overrideStyle);
};

const body = (myMessage, fontSize, collapsed, overrideStyle) => {
  let style = styles.body;

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if (fontSize === 'medium') {
    style = combineStyles(style, { fontSize: '18px', lineHeight: '20px' });
  }

  if (fontSize === 'large') {
    style = combineStyles(style, { fontSize: '22px', lineHeight: '24px' });
  }

  if (collapsed) {
    style = combineStyles(style, { display: 'initial' });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  root,
  body
};
