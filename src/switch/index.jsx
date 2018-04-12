import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import styles from './styles';
import getStyles from './get-styles';
import withTheme from '../with-theme';

const propTypes = {
  /** The Switch's active state */
  active: PropTypes.bool,
  /**
   * Callback fired when Switch's value changes
   *
   * function(event: object, value: string || number) => void
   */
  toggleSwitch: PropTypes.func.isRequired,
  /** The Switch's label */
  label: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the track element */
  trackStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the knob element */
  knobStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the label element */
  labelStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.string.isRequired
};

const defaultProps = {
  active: false,
  label: null,
  style: {},
  trackStyle: {},
  knobStyle: {},
  labelStyle: {}
};

const displayName = 'Switch';

const Switch = ({
  active, label, toggleSwitch, style, trackStyle, knobStyle, labelStyle, color, ...custom
}) => (
  <section style={style} {...custom}>
    {label ? <span style={getStyles.label(labelStyle)}>{label}</span> : null}
    <section style={styles.wrapper} onClick={toggleSwitch}>
      <div style={getStyles.track(color, active, trackStyle)} />
      <div style={getStyles.knob(color, active, knobStyle)} />
    </section>
  </section>
);

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
Switch.displayName = displayName;

const enhance = compose(
  withTheme,
  Radium
);

export default enhance(Switch);
