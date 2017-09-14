import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (image, fallbackImage, overrideStyle) => {
  let style = combineStyles(styles.root, { backgroundImage: `url(${image})` });

  if (fallbackImage) {
    style = combineStyles(style, { backgroundImage: `url(${image}), url(${fallbackImage})` });
  }

  return combineStyles(style, overrideStyle);
};

const status = (type, overrideStyle) => {
  let style = styles.status;
  let backgroundColor;

  switch (type) {
    case 'online':
      backgroundColor = colors.online;
      break;
    case 'away':
      backgroundColor = colors.away;
      break;
    case 'offline':
      backgroundColor = colors.offline;
      break;
    default:
      backgroundColor = colors.offline;
  }

  style = combineStyles(style, { backgroundColor });

  return combineStyles(style, overrideStyle);
};

export default {
  root,
  status
};
