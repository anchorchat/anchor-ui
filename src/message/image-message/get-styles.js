import colors from '../../settings/colors';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

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

function body(myMessage, fontSize, overrideStyle) {
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

  return combineStyles(style, overrideStyle);
}

export default {
  root,
  body
};
