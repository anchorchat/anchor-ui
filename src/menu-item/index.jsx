import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/menu-item';
import combineStyles from '../internal/combine-styles';

/** General purpose menu item */
function MenuItem({ icon, text, style, textStyle, iconStyle, onClick }) {
  return (
    <section style={combineStyles(styles.menuItem, style)} onClick={onClick}>
      <div style={combineStyles(styles.icon, iconStyle)}>{icon}</div>
      <p style={combineStyles(styles.text, textStyle)}>
        {text}
      </p>
    </section>
  );
}

MenuItem.displayName = 'MenuItem';

MenuItem.propTypes = {
  /** The item's icon */
  icon: PropTypes.node.isRequired,
  /** The item's label */
  text: PropTypes.string.isRequired,
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
  style: {},
  textStyle: {},
  iconStyle: {}
};

export default pure(Radium(MenuItem));
