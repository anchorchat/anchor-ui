import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const displayName = 'CardContent';

const propTypes = {
  /** The CardContent's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

const defaultProps = {
  style: {}
};

/** A Card is a piece of paper with unique related data */
const CardContent = ({ children, style, ...custom }) => (
  <section style={getStyles.root(style)} {...custom}>
    {children}
  </section>
);

CardContent.displayName = displayName;
CardContent.propTypes = propTypes;
CardContent.defaultProps = defaultProps;

export default CardContent;
