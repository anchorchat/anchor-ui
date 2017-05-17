import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import styles from '../style/switch';
import combineStyles from '../internal/combine-styles';
import fade from '../internal/fade';
import themeable from '../themeable';

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


function Switch(
  { active, label, toggleSwitch, style, trackStyle, knobStyle, labelStyle, color, ...custom }
) {
  return (
    <section style={style} {...custom}>
      <span style={combineStyles(styles.label, labelStyle)}>{label}</span>
      <section style={styles.wrapper} onClick={toggleSwitch}>
        <div style={getTrackStyle(color, active, trackStyle)} />
        <div style={getKnobStyle(color, active, knobStyle)} />
      </section>
    </section>
  );
}

Switch.displayName = 'Switch';

Switch.propTypes = {
  /** The switch's active state */
  active: PropTypes.bool,
  /** Toggle the switch's active state */
  toggleSwitch: PropTypes.func.isRequired,
  /** The switch's label */
  label: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the track element */
  trackStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the knob element */
  knobStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object),
  color: PropTypes.string.isRequired
};

Switch.defaultProps = {
  active: false,
  label: null,
  style: {},
  trackStyle: {},
  knobStyle: {},
  labelStyle: {}
};

const enhance = compose(
  themeable,
  Radium,
  pure
);

export default enhance(Switch);
