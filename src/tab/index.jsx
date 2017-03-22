import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

function Tab(
  { onClick, icon, label, selected, style, iconStyle, labelStyle, ...custom }, { color }
) {
  return (
    <button style={getStyles.root(color, selected, style)} onClick={onClick}>
      {icon ? <div style={getStyles.icon(iconStyle)}>{icon}</div> : null}
      <span style={getStyles.label(labelStyle)}>{label}</span>
    </button>
  );
}

Tab.displayName = 'Tab';

Tab.propTypes = {
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

Tab.defaultProps = {
  icon: null,
  selected: false,
  style: {},
  labelStyle: {},
  iconStyle: {}
};

Tab.contextTypes = {
  color: PropTypes.string
};

export default pure(Radium(Tab));
