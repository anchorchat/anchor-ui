import colors from '../../settings/colors';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

const header = (myMessage, compact, fontSize, badge, iconMenu, overrideStyle) => {
  let style = styles.header;

  if (myMessage) {
    style = combineStyles(style, { color: colors.white });
  }

  if (iconMenu) {
    style = combineStyles(style, { marginRight: '35px' });
  }

  if (compact) {
    style = combineStyles(style, { flexShrink: '0', marginRight: '10px', marginBottom: '0' });
  }

  if (fontSize === 'medium') {
    style = combineStyles(style, { fontSize: '16px', lineHeight: '24px' });
  }

  if (fontSize === 'large') {
    style = combineStyles(style, { fontSize: '18px', lineHeight: '28px' });
  }

  if (badge) {
    style = combineStyles(style, { display: 'flex', alignItems: 'center' });
  }

  return combineStyles(style, overrideStyle);
};

const avatar = (myMessage) => {
  let style = styles.avatar;

  if (myMessage) {
    style = combineStyles(style, { left: 'initial', right: '-48px', marginLeft: 0 });
  }

  return style;
};

export default {
  header,
  avatar
};
