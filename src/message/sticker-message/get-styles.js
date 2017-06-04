import colors from '../../settings/colors';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

const root = () => styles.root;

const header = (color = colors.theme, myMessage, avatar, compact, overrideStyle) => {
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
};

const body = (myMessage, avatar, compact, overrideStyle) => {
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

  if (compact) {
    style = combineStyles(style, { float: 'none', marginLeft: 0, marginRight: 0 });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  root,
  header,
  body
};
