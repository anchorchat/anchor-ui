import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (themeColor, avatar, overrideStyle) => {
  const color = themeColor || colors.theme;

  const style = { ...styles.profileCard, backgroundColor: color };

  if (avatar) {
    return combineStyles(combineStyles(style, styles.avatar), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
};

export default { root };
