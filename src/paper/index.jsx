import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import getStyles from './get-styles';

/** A Paper element is a basic container that can give depth to the page. */
const Paper = ({
  children,
  depth,
  style,
  ...custom
}) => (
  <section style={getStyles.root(depth, style)} {...custom}>
    {children}
  </section>
);

Paper.displayName = 'Paper';

Paper.propTypes = {
  /** The Paper's children */
  children: PropTypes.node.isRequired,
  /** The Paper's shadow depth. One of the following: [1, 2, 3, 4, 5] */
  depth: PropTypes.oneOf([1, 2, 3, 4, 5]),
  /** Override the style of the root element */
  style: PropTypes.instanceOf(Object)
};

Paper.defaultProps = {
  depth: 1,
  style: {}
};

export default Radium(Paper);
