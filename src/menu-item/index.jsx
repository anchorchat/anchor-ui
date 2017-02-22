import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/menu-item';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function getStyle(icon, active, overrideStyle) {
  let style = styles.menuItem;

  if (icon) {
    style = combineStyles(style, { paddingLeft: '40px' });
  }

  if (active) {
    style = combineStyles(style, { color: colors.primaryText });
  }

  return combineStyles(style, overrideStyle);
}

/** General purpose menu item */
function MenuItem({ icon, text, style, textStyle, iconStyle, onClick, active }) {
  return (
    <section style={getStyle(icon, active, style)} onClick={onClick}>
      {icon ? <div style={combineStyles(styles.icon, iconStyle)}>{icon}</div> : null}
      <p style={combineStyles(styles.text, textStyle)}>
        {text}
      </p>
    </section>
  );
}

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
  /** The item's icon */
  icon: PropTypes.node,
  /** The item's label */
  text: PropTypes.string.isRequired,
  /** MenuItem active */
  active: PropTypes.bool,
  /** MenuItem onClick function */
  onClick: PropTypes.func.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the input element */
  textStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object)
};

MenuItem.defaultProps = {
  icon: null,
  active: false,
  style: {},
  textStyle: {},
  iconStyle: {}
};

export default pure(Radium(MenuItem));
