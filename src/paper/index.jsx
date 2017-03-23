import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

function Paper({ children, depth, style, ...custom }) {
  return (
    <section style={getStyles.root(depth, style)} {...custom}>
      {children}
    </section>
  );
}

Paper.displayName = 'Paper';

Paper.propTypes = {
  /* The Paper's children */
  children: PropTypes.node.isRequired,
  /* The Paper's shadow depth */
  depth: PropTypes.oneOf([1, 2, 3, 4, 5]),
  /* Override the style of the root element */
  style: PropTypes.instanceOf(Object)
};

Paper.defaultProps = {
  depth: 1,
  style: {}
};

export default pure(Radium(Paper));
