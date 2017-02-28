import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/switch';
import combineStyles from '../internal/combine-styles';

function getKnobStyle(active, overrideStyle) {
  let style = styles.knob;

  if (active) {
    style = combineStyles(style, styles.knobActive);
  }

  return combineStyles(style, overrideStyle);
}

function getTrackStyle(active, overrideStyle) {
  let style = styles.track;

  if (active) {
    style = combineStyles(style, styles.trackActive);
  }

  return combineStyles(style, overrideStyle);
}


function Switch({ active, toggleSwitch }) {
  return (
    <section style={styles.wrapper} onClick={toggleSwitch}>
      <div style={getTrackStyle(active, {})} />
      <div style={getKnobStyle(active, {})} />
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

export default pure(Radium(Switch));
