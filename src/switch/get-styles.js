import styles from './styles';
import combineStyles from '../internal/combine-styles';
import fade from '../internal/fade';

const knob = (themeColor, active, overrideStyle) => {
  let style = styles.knob;
  let activeStyle = styles.knobActive;

  if (themeColor) {
    activeStyle = combineStyles(activeStyle, { backgroundColor: themeColor });
  }

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
};

const track = (themeColor, active, overrideStyle) => {
  let style = styles.track;
  let activeStyle = styles.trackActive;

  if (themeColor) {
    activeStyle = combineStyles(activeStyle, { backgroundColor: fade(themeColor, 0.5) });
  }

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
};

const label = overrideStyle => combineStyles(styles.label, overrideStyle);

export default {
  knob,
  track,
  label
};
