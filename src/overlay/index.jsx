import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

/** Overlay with dark transparent background, useful for rendering Dialogs in */
const Overlay = ({ children, style, ...custom }) => (
  <section style={getStyles.root(style)} {...custom}>{children}</section>
);

Overlay.propTypes = {
  /** The Overlays children */
  children: PropTypes.node,
  /** Override the style of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Overlay.displayName = 'Overlay';

Overlay.defaultProps = {
  children: null,
  style: {}
};

export default Overlay;
