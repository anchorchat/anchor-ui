import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import getStyles from './get-styles';
import Overlay from '../overlay';
import themeable from '../themeable';

/** A dialog that can only be closed by selecting one of the actions. */
function Modal({
  children, actions, style, contentStyle, footerStyle, open, overlayStyle, color, ...custom
}) {
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
  overlayStyle: PropTypes.instanceOf(Object),
  color: PropTypes.string.isRequired
};

Modal.displayName = 'Modal';

Modal.defaultProps = {
  style: {},
  contentStyle: {},
  footerStyle: {},
  open: false,
  overlayStyle: {}
};

const enhance = compose(
  themeable(),
  Radium,
  pure
);

export default enhance(Modal);
