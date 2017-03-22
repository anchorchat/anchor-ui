import React, { PropTypes } from 'react';
import getStyles from './get-styles';

function Modal({ children, actions, style, contentStyle, footerStyle, ...custom }, { color }) {
  return (
    <section style={getStyles.overlay()}>
      <section style={getStyles.root(style)} {...custom}>
        <section style={getStyles.content(contentStyle)}>
          {children}
        </section>
        <footer style={getStyles.footer(color, footerStyle)}>
          {actions}
        </footer>
      </section>
    </section>
  );
}

Modal.propTypes = {
  /* The Modal's children */
  children: PropTypes.node.isRequired,
  /* The Modal's actions */
  actions: PropTypes.node.isRequired,
  /* Override the style of the root element */
  style: PropTypes.instanceOf(Object),
  /* Override the style of the content element */
  contentStyle: PropTypes.instanceOf(Object),
  /* Override the style of the footer element */
  footerStyle: PropTypes.instanceOf(Object)
};

Modal.displayName = 'Modal';

Modal.defaultProps = {
  style: {},
  contentStyle: {},
  footerStyle: {}
};

Modal.contextTypes = {
  color: PropTypes.string
};

export default Modal;
