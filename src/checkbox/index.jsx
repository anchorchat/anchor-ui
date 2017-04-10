import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import colors from '../settings/colors';
import getStyles from './get-styles';
import IconCheckbox from '../icons/icon-checkbox';
import styles from './styles';

/** A checkbox is used to verify which options you want selected from a group. */
function Checkbox(
  { onChange, label, checked, name, style, inputStyle, iconStyle, labelStyle, ...custom },
  { color }
) {
  return (
    <label htmlFor={name} style={getStyles.root(color, style)} {...custom}>
      <input
        type="checkbox"
        id={name}
        onChange={onChange}
        checked={checked}
        style={getStyles.input(inputStyle)}
      />
      <div style={getStyles.icon(iconStyle)}>
        {
          checked
          ? <IconCheckbox color={color || colors.theme} />
          : <div style={styles.unchecked} />
        }
      </div>
      <span style={getStyles.label(labelStyle)}>
        {label}
      </span>
    </label>
  );
}

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  /** The input's label text */
  label: PropTypes.node.isRequired,
  /** The input's name */
  name: PropTypes.node.isRequired,
  /** The input's onChange function */
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
  labelStyle: PropTypes.instanceOf(Object)
};

Checkbox.defaultProps = {
  style: {},
  inputStyle: {},
  iconStyle: {},
  labelStyle: {},
  checked: false
};

Checkbox.contextTypes = {
  color: PropTypes.string
};

export default Radium(Checkbox);
