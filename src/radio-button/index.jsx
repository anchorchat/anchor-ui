import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import colors from '../settings/colors';
import IconRadio from '../icons/icon-radio';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

function getStyle(color = colors.theme, overrideStyle) {
  let style = styles.container;

  style = combineStyles(style, { ':hover': { color } });

  return combineStyles(style, overrideStyle);
}

class RadioButton extends Component {
  static displayName = 'RadioButton'

  static propTypes = {
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
    labelStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
    inputStyle: {},
    iconStyle: {},
    labelStyle: {},
    checked: false,
    onChange: null
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext) ||
      Radium.getState(this.state, 'radio', ':hover') !== Radium.getState(nextState, 'radio', ':hover') ||
      Radium.getState(this.state, 'radio', ':focus') !== Radium.getState(nextState, 'radio', ':focus')
    );
  }

  render() {
    const {
      value, label, style, inputStyle, iconStyle, labelStyle, onChange, checked, ...custom
    } = this.props;
    const { color } = this.context;

    return (
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
  }
}

export default Radium(RadioButton);
