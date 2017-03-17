import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function getStyle(themeColor, icon, active, overrideStyle) {
  let style = {};
  const color = themeColor || colors.theme;

  if (icon) {
    style = combineStyles(style, { paddingLeft: '40px' });
  }

  if (active) {
    style = combineStyles(style, { color, paddingRight: '40px' });
  }

  return combineStyles(style, overrideStyle);
}

class Tab extends Component {
  static displayName = 'Tab';

  static propTypes = {
    /** The Tab's icon */
    icon: PropTypes.node,
    /** The Tab's label */
    label: PropTypes.node.isRequired,
    /** Tab active */
    active: PropTypes.bool,
    /** Tab onClick function */
    onClick: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the label element */
    labelStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the icon element */
    iconStyle: PropTypes.instanceOf(Object)
  };

  static defaultProps = {
    icon: null,
    active: false,
    style: {},
    labelStyle: {},
    iconStyle: {}
  };

  static contextTypes = {
    color: PropTypes.string
  }

  render() {
    const { onClick, icon, label, active, style, iconStyle, labelStyle } = this.props;
    const { color } = this.context;

    return (
      <button style={getStyle(color, icon, active, style)} onClick={onClick}>
        {icon ? <div style={iconStyle}>{icon}</div> : null}
        <span style={labelStyle}>{label}</span>
      </button>
    );
  }
}

export default pure(Radium(Tab));
