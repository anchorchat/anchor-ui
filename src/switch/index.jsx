import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from './styles';
import getStyles from './get-styles';
import combineStyles from '../internal/combine-styles';

function Switch(
  { active, label, toggleSwitch, style, trackStyle, knobStyle, labelStyle, ...custom }, { color }
) {
  return (
    <section style={style} {...custom}>
      <span style={combineStyles(styles.label, labelStyle)}>{label}</span>
      <section style={styles.wrapper} onClick={toggleSwitch}>
        <div style={getStyles.track(color, active, trackStyle)} />
        <div style={getStyles.knob(color, active, knobStyle)} />
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
  labelStyle: PropTypes.instanceOf(Object)
};

Switch.defaultProps = {
  active: false,
  label: null,
  style: {},
  trackStyle: {},
  knobStyle: {},
  labelStyle: {}
};

Switch.contextTypes = {
  color: PropTypes.string
};

export default pure(Radium(Switch));
