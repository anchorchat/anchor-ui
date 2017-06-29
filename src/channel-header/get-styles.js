import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = overrideStyle => combineStyles(styles.root, overrideStyle);

const text = overrideStyle => combineStyles(styles.text, overrideStyle);
const secondaryText = (color = colors.theme, overrideStyle) => {
  const style = combineStyles(styles.secondaryText, { color });

  return combineStyles(style, overrideStyle);
};

const leftButton = overrideStyle => combineStyles(styles.leftButton, overrideStyle);

const rightButton = overrideStyle => combineStyles(styles.rightButton, overrideStyle);

export default {
  root,
  text,
  secondaryText,
  leftButton,
  rightButton
};
