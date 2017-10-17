import combineStyles from '../../internal/combine-styles';
import colors from '../../settings/colors';
import styles from './styles';

const root = (myMessage, type, edited, collapsed, fontSize, overrideStyle) => {
  let style = styles.root;

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if ((type === 'image' || type === 'giphy') && !collapsed) {
    style = combineStyles(style, styles.image);

    if (fontSize === 'medium') {
      style = combineStyles(style, { width: '36px' });
    }

    if (fontSize === 'large') {
      style = combineStyles(style, { width: '41px' });
    }
  }

  if (type === 'sticker') {
    style = combineStyles(style, { alignSelf: 'center', paddingTop: '2px' });
  }

  if (edited) {
    style = combineStyles(style, { width: 'auto' });
  }

  if (fontSize === 'medium') {
    style = combineStyles(style, { fontSize: '14px', lineHeight: '14px' });
  }

  if (fontSize === 'large') {
    style = combineStyles(style, { fontSize: '16px', lineHeight: '16px' });
  }

  return combineStyles(style, overrideStyle);
};

export default {
  root
};
