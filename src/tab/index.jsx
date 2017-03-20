import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';
import styles from './styles';
import getStyles from './get-styles';

function getStyle(themeColor, icon, selected, overrideStyle) {
  let style = {};
  const color = themeColor || colors.theme;

  if (icon) {
    style = combineStyles(style, { paddingLeft: '40px' });
  }

  if (selected) {
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
    /** Tab selected */
    selected: PropTypes.bool,
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
    selected: false,
    style: {},
    labelStyle: {},
    iconStyle: {}
  };

  static contextTypes = {
    color: PropTypes.string
  }

  render() {
    const { onClick, icon, label, selected, style, iconStyle, labelStyle } = this.props;
    const { color } = this.context;

    return (
      <button style={getStyles.root(color, selected, style)} onClick={onClick}>
        {icon ? <div style={getStyles.icon(iconStyle)}>{icon}</div> : null}
        <span style={getStyles.label(labelStyle)}>{label}</span>
      </button>
    );
  }
}

export default pure(Radium(Tab));
