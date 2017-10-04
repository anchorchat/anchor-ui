import combineStyles from '../../internal/combine-styles';
import colors from '../../settings/colors';
import styles from './styles';

const root = (myMessage, type, edited, overrideStyle) => {
  let style = styles.root;

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if (type === 'image' || type === 'giphy') {
    style = combineStyles(style, styles.image);
  }

  if (type === 'sticker') {
    style = combineStyles(style, { alignSelf: 'center', paddingTop: '2px' });
  }

  if (edited) {
    style = combineStyles(style, { width: 'auto' });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  root
};
