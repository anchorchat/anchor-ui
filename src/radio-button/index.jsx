import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import colors from '../settings/colors';
import IconRadio from '../icons/icon-radio';

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
    onChange: PropTypes.func,
    /** Input active */
    checked: PropTypes.bool,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    onChange: () => {},
    style: {},
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
    const { name, value, label, style, onChange, checked } = this.props;
    const { color } = this.context;
    const themeColor = color || colors.theme;

    return (
      <label htmlFor={value} style={style}>
        <input
          type="radio"
          ref={radio => (this.radio = radio)}
          name={name}
          value={value}
          id={value}
          style={style}
          onChange={onChange}
          onBlur={this.handleBlur}
          checked={checked}
        />
        <IconRadio color={checked ? themeColor : colors.icons} />
        {label}
      </label>
    );
  }
}

export default Radium(RadioButton);
