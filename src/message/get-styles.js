import combineStyles from '../internal/combine-styles';
import styles from './styles';

const container = (myMessage, compact) => {
  if (compact) {
    return styles.messageContainer;
  }

  if (myMessage) {
    return combineStyles(styles.messageContainer, styles.myContainer);
  }

  return styles.messageContainer;
};

const iconMenu = (compact) => {
  if (compact) {
    return combineStyles(styles.iconMenu, { right: '-48px' });
  }

  return styles.iconMenu;
};

export default {
  container,
  iconMenu
};
