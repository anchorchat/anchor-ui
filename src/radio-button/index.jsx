import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import colors from '../settings/colors';
import IconRadio from '../icons/icon-radio';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

class RadioButton extends Component {
  static displayName = 'RadioButton'

  static propTypes = {
    /** The input's name */
    name: PropTypes.string.isRequired,
    /** The input's value */
    value: PropTypes.string.isRequired,
    /** The input's label text */
    label: PropTypes.string.isRequired,
    /** The input's onChange function */
    onChange: PropTypes.func.isRequired,
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
    onChange: () => {},
    style: {},
    inputStyle: {},
    iconStyle: {},
    labelStyle: {},
    checked: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const {
      name, value, label, style, inputStyle, iconStyle, labelStyle, onChange, checked
    } = this.props;
    const { color } = this.context;
    const themeColor = color || colors.theme;

    return (
      <label htmlFor={value} style={combineStyles(styles.container, style)}>
        <input
          type="radio"
          ref={radio => (this.radio = radio)}
          name={name}
          value={value}
          id={value}
          onChange={onChange}
          onBlur={this.handleBlur}
          checked={checked}
          style={combineStyles(styles.input, inputStyle)}
        />
        <div style={combineStyles(styles.icon, iconStyle)}>
          <IconRadio color={checked ? themeColor : colors.icons} />
        </div>
        <span style={combineStyles(styles.label, labelStyle)}>
          {label}
        </span>
      </label>
    );
  }
}

export default Radium(RadioButton);
