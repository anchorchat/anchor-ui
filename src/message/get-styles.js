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

export default {
  container
};
