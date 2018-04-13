import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import Overlay from '../overlay';
import Portal from '../portal';

const displayName = 'Modal';

const propTypes = {
  /** Header text */
  header: PropTypes.node,
  /** The Modal's children */
  children: PropTypes.node.isRequired,
  /** The Modal's actions */
  actions: PropTypes.node.isRequired,
  /** Override the style of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the header element */
  headerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the style of the content element */
  contentStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the style of the footer element */
  footerStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Toggle the Dialogs visibility */
  open: PropTypes.bool,
  /** Override the styles of the overlay element */
  overlayStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.string.isRequired
};

const defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  contentStyle: {},
  footerStyle: {},
  open: false,
  overlayStyle: {}
};

/** A dialog that can only be closed by selecting one of the actions. */
const Modal = ({
  header,
  children,
  actions,
  style,
  headerStyle,
  contentStyle,
  footerStyle,
  open,
  overlayStyle,
  color,
  ...custom
}) => {
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Overlay style={overlayStyle}>
        <section style={getStyles.root(style)} {...custom}>
          <section style={getStyles.content(contentStyle)}>
            {header ? <h1 style={getStyles.header(headerStyle)}>{header}</h1> : null}
            {children}
          </section>
          <footer style={getStyles.footer(color, footerStyle)}>
            {actions}
          </footer>
        </section>
      </Overlay>
    </Portal>
  );
};

Modal.displayName = displayName;
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
