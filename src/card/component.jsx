import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

/** A Card is a piece of paper with unique related data */
const Card = ({ children, style, ...custom }) => (
  <section style={getStyles.root(style)} {...custom}>
    {children}
  </section>
);

Card.displayName = 'Card';

Card.propTypes = {
  /** The Card's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

Card.defaultProps = {
  style: {}
};

export default Card;
