import React, { PropTypes } from 'react';
import getStyles from './get-styles';

function CardContent({ children, style, ...custom }) {
  return (
    <section style={getStyles.root(style)} {...custom}>
      {children}
    </section>
  );
}

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

export default CardContent;
