import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

const root = (
  color = colors.theme, iconElement, active, rightButton, overrideStyle, activeStyle
) => {
  let style = styles.root;

  if (iconElement) {
    style = combineStyles(style, { paddingLeft: '40px' });
  }

  if (active) {
    style = combineStyles(style, { color, fontWeight: 'bolder' });
  }

  if (rightButton) {
    style = combineStyles(style, { paddingRight: '56px' });
  }

  if (active) {
    return combineStyles(style, combineStyles(overrideStyle, activeStyle));
  }

  return combineStyles(style, overrideStyle);
};

const text = overrideStyle => combineStyles(styles.text, overrideStyle);

const icon = overrideStyle => combineStyles(styles.icon, overrideStyle);

const rightButton = overrideStyle => combineStyles(styles.rightButton, overrideStyle);


export default {
  root,
  text,
  icon,
  rightButton
};
