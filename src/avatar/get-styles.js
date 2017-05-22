import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (image, overrideStyle) => {
  const style = combineStyles(styles.root, { backgroundImage: `url(${image})` });

  return combineStyles(style, overrideStyle);
};

const status = (type, overrideStyle) => {
  let style = styles.status;
  let backgroundColor;

  switch (type) {
    case 'away':
      backgroundColor = colors.away;
      break;
    case 'offline':
      backgroundColor = colors.offline;
      break;
    default:
      backgroundColor = colors.online;
  }

  style = combineStyles(style, { backgroundColor });

  return combineStyles(style, overrideStyle);
};

export default {
  root,
  status
};
