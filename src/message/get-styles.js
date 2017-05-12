import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import styles from './styles';

function container(myMessage, compact) {
  if (compact) {
    return styles.messageContainer;
  }

  if (myMessage) {
    return combineStyles(styles.messageContainer, styles.myContainer);
  }

  return styles.messageContainer;
}

function root(themeColor, myMessage, avatar, compact, overrideStyle) {
  let style = styles.message;

  const color = themeColor || colors.theme;

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
    style = combineStyles(style, { marginLeft: '0', marginRight: '66px' });
  }

  if (compact) {
    style = combineStyles(
      style,
      {
        marginLeft: '0',
        marginRight: '0',
        maxWidth: '100%',
        display: 'flex'
      }
    );
  }

  return combineStyles(style, overrideStyle);
}

function text(myMessage, fontSize, type = 'text', overrideStyle) {
  let style = styles.messageBody;

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if (fontSize === 'medium') {
    style = combineStyles(style, { fontSize: '18px', lineHeight: '20px' });
  }

  if (fontSize === 'large') {
    style = combineStyles(style, { fontSize: '22px', lineHeight: '24px' });
  }

  if (type === 'image') {
    style = combineStyles(style, { flexDirection: 'column' });
  }

  if (type === 'sticker') {
    style = combineStyles(style, { flexDirection: 'column' });
  }

  return combineStyles(style, overrideStyle);
}

export default {
  container,
  root,
  text
};
