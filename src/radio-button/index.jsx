import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import colors from '../settings/colors';
import IconRadio from '../icons/icon-radio';
import getStyles from './get-styles';
import themeable from '../themeable';

/** Radio buttons are switches used for selection from multiple options */
const RadioButton = ({
  value, label, style, inputStyle, iconStyle, labelStyle, onChange, checked, color, ...custom
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
      <IconRadio color={checked ? color || colors.theme : colors.icons} />
    </div>
    <span style={getStyles.label(labelStyle)}>
      {label}
    </span>
  </label>
);

RadioButton.displayName = 'RadioButton';

RadioButton.propTypes = {
  /** The input's value */
  value: PropTypes.string.isRequired,
  /** The input's label text */
  label: PropTypes.node.isRequired,
  /**
   * Callback fired when RadioButton's value changes
   *
   * function(event: object) => void
   */
  onChange: PropTypes.func,
  /** Input active */
  checked: PropTypes.bool,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the input element */
  inputStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object),
  color: PropTypes.string.isRequired
};

RadioButton.defaultProps = {
  style: {},
  inputStyle: {},
  iconStyle: {},
  labelStyle: {},
  checked: false,
  onChange: null
};

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(RadioButton);
