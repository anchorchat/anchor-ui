import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

function Overlay({ children, style, ...custom }) {
  return <section style={getStyles.root(style)} {...custom}>{children}</section>;
}

Overlay.propTypes = {
  /** The Overlays children */
  children: PropTypes.node,
  /** Override the style of the root element */
  style: PropTypes.instanceOf(Object),
};

Overlay.displayName = 'Overlay';

Overlay.defaultProps = {
  children: null,
  style: {}
};

export default Overlay;
