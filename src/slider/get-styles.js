import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import styles from './styles';

function sliderFilled(themeColor, percentage, overideStyles) {
  const color = themeColor || colors.theme;
  const style = combineStyles(styles.sliderFilled, { width: `${percentage * 100}%`, backgroundColor: color });

  return combineStyles(style, overideStyles);
}

function sliderRemaining(percentage, overideStyles) {
  const style = combineStyles(styles.sliderRemaining, { width: `${(1 - percentage) * 100}%` });

  return combineStyles(style, overideStyles);
}

function sliderButton(themeColor, percentage, overideStyles) {
  const color = themeColor || colors.theme;
  let style = combineStyles(styles.sliderButton, { left: `${percentage * 100}%`, backgroundColor: color });

  if (percentage === 0) {
    style = combineStyles(style, { border: `2px solid ${colors.grey}`, backgroundColor: colors.white });
  }

  return combineStyles(style, overideStyles);
}

export default { sliderFilled, sliderRemaining, sliderButton };
