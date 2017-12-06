import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const displayName = 'Card';

const propTypes = {
  /** The Card's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

const defaultProps = {
  style: {}
};

/** A Card is a piece of paper with unique related data */
const Card = ({ children, style, ...custom }) => (
  <section style={getStyles.root(style)} {...custom}>
    {children}
  </section>
);

Card.displayName = displayName;
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
