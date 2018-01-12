import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import getStyles from './get-styles';
import themeable from '../themeable';

const propTypes = {
  /** The Tab's icon */
  icon: PropTypes.node,
  /** The Tab's label */
  label: PropTypes.node.isRequired,
  /** Tab selected */
  selected: PropTypes.bool,
  /**
   * Callback fired when Tab is clicked
   *
   * function(event: object, value: string || number) => void
   */
  onClick: PropTypes.func.isRequired,
  /** Override the styles of an inactive root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of an inactive label element */
  labelStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object),
  /** Badge for the tab */
  badge: PropTypes.node,
  /** Override the styles of the badge element */
  badgeStyle: PropTypes.instanceOf(Object),
  /** Overide the styles of an active root element. */
  activeStyle: PropTypes.instanceOf(Object),
  /** Overide the styles of an active label element. */
  activeLabelStyle: PropTypes.instanceOf(Object),
  color: PropTypes.string.isRequired
};

const defaultProps = {
  icon: null,
  selected: false,
  style: {},
  labelStyle: {},
  iconStyle: {},
  badge: null,
  badgeStyle: {},
  activeStyle: {},
  activeLabelStyle: {}
};

const displayName = 'Tab';

const Tab = ({
  onClick,
  icon,
  label,
  selected,
  style,
  iconStyle,
  labelStyle,
  badge,
  badgeStyle,
  activeStyle,
  activeLabelStyle,
  color,
  ...custom
}) => (
  <section
    style={getStyles.root(color, selected, style, activeStyle)}
    onClick={onClick}
    {...custom}
  >
    {icon ? <div style={getStyles.icon(selected, iconStyle)}>{icon}</div> : null}
    <span style={getStyles.label(selected, labelStyle, activeLabelStyle)}>{label}</span>
    {badge ? <div style={getStyles.badge(badgeStyle)}>{badge}</div> : null}
  </section>
);

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
Tab.displayName = displayName;

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Tab);
