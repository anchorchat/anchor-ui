import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

/** A Card is a piece of paper with unique related data */
const CardContent = ({ children, style, ...custom }) => (
  <section style={getStyles.root(style)} {...custom}>
    {children}
  </section>
);

CardContent.displayName = 'CardContent';

CardContent.propTypes = {
  /** The CardContent's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

CardContent.defaultProps = {
  style: {}
};

export default pure(Radium(CardContent));
