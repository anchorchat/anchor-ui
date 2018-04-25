import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (color = colors.theme, avatar, overrideStyle) => {
  const style = { ...styles.profileCard, backgroundColor: color };

  if (avatar) {
    return combineStyles(combineStyles(style, styles.withAvatar), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
};

const avatar = () => styles.avatar;

export default {
  root,
  avatar
};
