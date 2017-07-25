import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';
import Divider from '../divider';

/** Pop over useful for showing tooltips or menu options */
const PopOver = ({
  children,
  header,
  style,
  headerStyle,
  open,
  popOverRef,
  position,
  secondaryMenuItems,
  dividerText,
  dividerStyle,
  ...custom
}) => {
  if (!open) {
    return null;
  }

  let divider = null;

  if (secondaryMenuItems) {
    divider = <Divider style={dividerStyle} />;
  }

  if (secondaryMenuItems && dividerText) {
    divider = <Divider text={dividerText} style={dividerStyle} />;
  }

  return (
    <section
      style={getStyles.root(position, style)}
      ref={popOverRef}
      {...custom}
    >
      {header ? <h1 style={getStyles.header(headerStyle)}>{header}</h1> : null}
      {children}
      {divider}
      {secondaryMenuItems}
    </section>
  );
};

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
  /** Override the styles of the divider element */
  dividerStyle: PropTypes.instanceOf(Object)
};

PopOver.defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  open: false,
  position: {},
  secondaryMenuItems: null,
  dividerText: null,
  dividerStyle: {}
};

export default pure(Radium(PopOver));
