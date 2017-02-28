import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/switch';
import combineStyles from '../internal/combine-styles';
import fade from '../internal/fade';

function getKnobStyle(themeColor, active, overrideStyle) {
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

function getTrackStyle(themeColor, active, overrideStyle) {
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


function Switch({ active, toggleSwitch }, { color }) {
  return (
    <section style={styles.wrapper} onClick={toggleSwitch}>
      <div style={getTrackStyle(color, active, {})} />
      <div style={getKnobStyle(color, active, {})} />
    </section>
  );
}

Switch.displayName = 'Switch';

Switch.propTypes = {
  active: PropTypes.bool,
  toggleSwitch: PropTypes.func.isRequired
};

Switch.defaultProps = {
  active: false
};

Switch.contextTypes = {
  color: PropTypes.string
};

export default pure(Radium(Switch));
