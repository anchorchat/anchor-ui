import React, { PropTypes } from 'react';
import getStyles from './get-styles';

function Card({ children, style, ...custom }) {
  return (
    <section style={getStyles.root(style)} {...custom}>
      {children}
    </section>
  );
}

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
