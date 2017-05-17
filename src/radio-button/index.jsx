import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import colors from '../settings/colors';
import IconRadio from '../icons/icon-radio';
import styles from './styles';
import combineStyles from '../internal/combine-styles';
import themeable from '../themeable';

function getStyle(color = colors.theme, overrideStyle) {
  let style = styles.container;

  style = combineStyles(style, { ':hover': { color } });

  return combineStyles(style, overrideStyle);
}

/** Radio buttons are switches used for selection from multiple options */
const RadioButton = ({
  value, label, style, inputStyle, iconStyle, labelStyle, onChange, checked, color, ...custom
}) => (
  <label key="radio" htmlFor={value} style={getStyle(color, style)}>
    <input
      type="radio"
      value={value}
      id={value}
      onChange={onChange}
      checked={checked}
      style={combineStyles(styles.input, inputStyle)}
      {...custom}
    />
    <div style={combineStyles(styles.icon, iconStyle)}>
      <IconRadio color={checked ? color || colors.theme : colors.icons} />
    </div>
    <span style={combineStyles(styles.label, labelStyle)}>
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
  /** The input's onChange function */
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
