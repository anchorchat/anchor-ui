import styles from './styles';
import combineStyles from '../internal/combine-styles';
import fade from '../internal/fade';
import colors from '../settings/colors';

const knob = (color = colors.theme, active, overrideStyle) => {
  let style = styles.knob;
  let activeStyle = styles.knobActive;

  activeStyle = combineStyles(activeStyle, { backgroundColor: color });

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
};

const track = (color = colors.theme, active, overrideStyle) => {
  let style = styles.track;
  let activeStyle = styles.trackActive;

  activeStyle = combineStyles(activeStyle, { backgroundColor: fade(color, 0.5) });

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
