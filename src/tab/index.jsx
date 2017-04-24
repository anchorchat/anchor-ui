import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

function Tab(
  {
    onClick,
    icon,
    label,
    selected,
    style,
    iconStyle,
    labelStyle,
    badge,
    badgeStyle,
    inactiveTabStyle,
    inactiveLabelStyle,
    ...custom
  },
  { color }
) {
  return (
    <section style={getStyles.root(color, selected, inactiveTabStyle, style)} onClick={onClick}>
      {icon ? <div style={getStyles.icon(selected, iconStyle)}>{icon}</div> : null}
      <span style={getStyles.label(selected, inactiveLabelStyle, labelStyle)}>{label}</span>
      {badge ? <div style={getStyles.badge(badgeStyle)}>{badge}</div> : null}
    </section>
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
  iconStyle: PropTypes.instanceOf(Object),
  /** Badge for the tab */
  badge: PropTypes.node,
  /** Override the styles of the badge element */
  badgeStyle: PropTypes.instanceOf(Object),
  /** Overide the styles of an inactive tab element. */
  inactiveTabStyle: PropTypes.instanceOf(Object),
  /** Overide the styles of an inactive label element. */
  inactiveLabelStyle: PropTypes.instanceOf(Object)
};

Tab.defaultProps = {
  icon: null,
  selected: false,
  style: {},
  labelStyle: {},
  iconStyle: {},
  badge: null,
  badgeStyle: {},
  inactiveTabStyle: {},
  inactiveLabelStyle: {}
};

Tab.contextTypes = {
  color: PropTypes.string
};

export default pure(Radium(Tab));
