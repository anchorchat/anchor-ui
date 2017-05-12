import colors from '../../settings/colors';
import combineStyles from '../../internal/combine-styles';
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

function header(color = colors.theme, myMessage, avatar, compact, overrideStyle) {
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

  return combineStyles(style, overrideStyle);
}

function body(myMessage, avatar, overrideStyle) {
  let style = styles.body;

  if (myMessage) {
    style = combineStyles(style, { marginLeft: '0', marginRight: '16px', float: 'right' });
  }

  if (avatar) {
    style = combineStyles(style, styles.avatar);
  }

  if (myMessage && avatar) {
    style = combineStyles(style, styles.myAvatar);
  }

  return combineStyles(style, overrideStyle);
}

export default {
  container,
  header,
  body
};
