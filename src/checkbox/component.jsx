import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import IconCheckbox from '../icons/icon-checkbox';

const propTypes = {
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
  /** Override the styles of the unchecked element */
  uncheckedStyles: PropTypes.instanceOf(Object),
  /** The checkbox' value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  inputStyle: {},
  iconStyle: {},
  labelStyle: {},
  uncheckedStyles: {},
  checked: false
};

const displayName = 'Checkbox';

/** A checkbox is used to verify which options you want selected from a group. */
const Checkbox = ({
  onChange, label, checked, name, style, inputStyle, iconStyle, labelStyle, uncheckedStyles, value, color, ...custom // eslint-disable-line max-len
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
        : <div style={getStyles.unchecked(uncheckedStyles)} />
      }
    </div>
    <span style={getStyles.label(labelStyle)}>
      {label}
    </span>
  </label>
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
Checkbox.displayName = displayName;

export default Checkbox;
