import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import getStyles from './get-styles';
import IconCheckbox from '../icons/icon-checkbox';
import styles from './styles';
import themeable from '../themeable';

/** A checkbox is used to verify which options you want selected from a group. */
const Checkbox = ({
  onChange, label, checked, name, style, inputStyle, iconStyle, labelStyle, value, color, ...custom
}) => (
  <label htmlFor={name} style={getStyles.root(color, style)} {...custom}>
    <input
      type="checkbox"
      id={name}
      onChange={onChange}
      checked={checked}
      style={getStyles.input(inputStyle)}
      value={value}
    />
    <div style={getStyles.icon(iconStyle)}>
      {
        checked
        ? <IconCheckbox color={color} />
        : <div style={styles.unchecked} />
      }
    </div>
    <span style={getStyles.label(labelStyle)}>
      {label}
    </span>
  </label>
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  /** The input's label text */
  label: PropTypes.node.isRequired,
  /** The input's name */
  name: PropTypes.node.isRequired,
  /**
   * Callback fired when the input's value is changed
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func.isRequired,
  /** Checkbox checked */
  checked: PropTypes.bool,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the input element */
  inputStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object),
  /** The checkbox' value */
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  style: {},
  inputStyle: {},
  iconStyle: {},
  labelStyle: {},
  checked: false
};

const enhance = compose(
  themeable(),
  Radium,
  pure
);

export default enhance(Checkbox);
