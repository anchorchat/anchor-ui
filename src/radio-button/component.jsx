import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';
import IconRadio from '../icons/icon-radio';
import getStyles from './get-styles';

const propTypes = {
  /** The input's value */
  value: PropTypes.string.isRequired,
  /** The input's label text */
  label: PropTypes.node,
  /**
   * Callback fired when RadioButton's value changes
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func,
  /** Input active */
  checked: PropTypes.bool,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the input element */
  inputStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the icon element */
  iconStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the label element */
  labelStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the label element */
  icon: PropTypes.node,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  inputStyle: {},
  iconStyle: {},
  labelStyle: {},
  checked: false,
  onChange: null,
  label: null,
  icon: null
};

const displayName = 'RadioButton';

/** Radio buttons are switches used for selection from multiple options */
const RadioButton = ({
  value, label, style, inputStyle, iconStyle, labelStyle, onChange, checked, color, icon, ...custom
}) => (
  <label key="radio" htmlFor={value} style={getStyles.root(color, style)}>
    <input
      type="radio"
      value={value}
      id={value}
      onChange={onChange}
      checked={checked}
      style={getStyles.input(inputStyle)}
      {...custom}
    />
    <div style={getStyles.icon(iconStyle)}>
      {icon || <IconRadio color={checked ? color || colors.theme : colors.icons} />}
    </div>
    {label ? <span style={getStyles.label(labelStyle)}>{label}</span> : null}
  </label>
);

RadioButton.propTypes = propTypes;
RadioButton.defaultProps = defaultProps;
RadioButton.displayName = displayName;

export default RadioButton;
