import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Portal from '../portal';
import getStyles from './get-styles';
import Divider from '../divider';

const displayName = 'PopOver';

const propTypes = {
  /** Content of the PopOver */
  children: PropTypes.node.isRequired,
  /** Optional header text */
  header: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Toggle the PopOvers visibility */
  open: PropTypes.bool,
  /** Override the styles of the header element */
  headerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Ref to the PopOver */
  popOverRef: PropTypes.shape({
    current: PropTypes.object
  }).isRequired,
  /** The PopOver's position relative to the anchor */
  position: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Secondary set of MenuItems */
  secondaryMenuItems: PropTypes.node,
  /** Text to divide the menu items */
  dividerText: PropTypes.node,
  /** Override the styles of the divider element */
  dividerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Callback fired when the PopOver's header is clicked
   *
   * function(event: object) => void
   */
  onHeaderClick: PropTypes.func
};

const defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  open: false,
  position: {},
  secondaryMenuItems: null,
  dividerText: null,
  dividerStyle: {},
  onHeaderClick: null
};

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
  onHeaderClick,
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
    <Portal>
      <section
        style={getStyles.root(position, style)}
        ref={popOverRef}
        {...custom}
      >
        {
          header
          ? <h1 onClick={onHeaderClick} style={getStyles.header(headerStyle)}>{header}</h1>
          : null
        }
        {children}
        {divider}
        {secondaryMenuItems}
      </section>
    </Portal>
  );
};

PopOver.displayName = displayName;
PopOver.propTypes = propTypes;
PopOver.defaultProps = defaultProps;

export default Radium(PopOver);
