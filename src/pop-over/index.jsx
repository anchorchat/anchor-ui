import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from './styles';
import combineStyles from '../internal/combine-styles';
import Divider from '../divider';
import getStyles from './get-styles';

/** Pop over useful for showing tooltips or menu options */
function PopOver({
  children,
  header,
  style,
  headerStyle,
  open,
  popOverRef,
  position,
  secondaryMenuItems,
  dividerText,
  visibleItems,
  ...custom
}) {
  if (!open) {
    return null;
  }

  let divider = null;

  if (secondaryMenuItems) {
    divider = <Divider />;
  }

  if (secondaryMenuItems && dividerText) {
    divider = <Divider text={dividerText} />;
  }

  return (
    <section
      style={getStyles.root(visibleItems, header, position, style)}
      ref={popOverRef}
      {...custom}
    >
      {header ? <h1 style={combineStyles(styles.header, headerStyle)}>{header}</h1> : null}
      {children}
      {divider}
      {secondaryMenuItems}
    </section>
  );
}

PopOver.displayName = 'PopOver';

PopOver.propTypes = {
  /** Content of the PopOver */
  children: PropTypes.node.isRequired,
  /** Optional header text */
  header: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Toggle the PopOvers visibility */
  open: PropTypes.bool,
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Ref to the PopOver */
  popOverRef: PropTypes.func.isRequired,
  /** The PopOver's position relative to the anchor */
  position: PropTypes.instanceOf(Object),
  /** Secondary set of MenuItems */
  secondaryMenuItems: PropTypes.node,
  /** Text to divide the menu items */
  dividerText: PropTypes.node,
  /** Amount of visible items. Height based on an item height of 44px and header height of 39px */
  visibleItems: PropTypes.number
};

PopOver.defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  open: false,
  position: {},
  secondaryMenuItems: null,
  dividerText: null,
  visibleItems: null
};

export default pure(Radium(PopOver));
