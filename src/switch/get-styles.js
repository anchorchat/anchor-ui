import styles from './styles';
import combineStyles from '../internal/combine-styles';
import fade from '../internal/fade';

function knob(themeColor, active, overrideStyle) {
  let style = styles.knob;
  let activeStyle = styles.knobActive;

  if (themeColor) {
    activeStyle = combineStyles(activeStyle, { background: themeColor });
  }

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
}

function track(themeColor, active, overrideStyle) {
  let style = styles.track;
  let activeStyle = styles.trackActive;

  if (themeColor) {
    activeStyle = combineStyles(activeStyle, { background: fade(themeColor, 0.5) });
  }

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  return combineStyles(style, overrideStyle);
}

export default {
  knob,
  track
};
