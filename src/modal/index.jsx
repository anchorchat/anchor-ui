import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';
import Overlay from '../overlay';

/** A dialog that can only be closed by selecting one of the actions. */
function Modal({
  children, actions, style, contentStyle, footerStyle, open, overlayStyle, ...custom }, { color }
) {
  if (!open) {
    return null;
  }

  return (
    <Overlay style={overlayStyle}>
      <section style={getStyles.root(style)} {...custom}>
        <section style={getStyles.content(contentStyle)}>
          {children}
        </section>
        <footer style={getStyles.footer(color, footerStyle)}>
          {actions}
        </footer>
      </section>
    </Overlay>
  );
}

Modal.propTypes = {
  /** The Modal's children */
  children: PropTypes.node.isRequired,
  /** The Modal's actions */
  actions: PropTypes.node.isRequired,
  /** Override the style of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the style of the content element */
  contentStyle: PropTypes.instanceOf(Object),
  /** Override the style of the footer element */
  footerStyle: PropTypes.instanceOf(Object),
  /** Toggle the Dialogs visibility */
  open: PropTypes.bool,
  /** Override the styles of the overlay element */
  overlayStyle: PropTypes.instanceOf(Object)
};

Modal.displayName = 'Modal';

Modal.defaultProps = {
  style: {},
  contentStyle: {},
  footerStyle: {},
  open: false,
  overlayStyle: {}
};

Modal.contextTypes = {
  color: PropTypes.string
};

export default pure(Radium(Modal));
