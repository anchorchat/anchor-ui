import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/lists';
import combineStyles from '../internal/combine-styles';

/**
 * List styling
 */
function List({ children, listRef, style }) {
  return <ul ref={listRef} style={combineStyles(styles.list, style)}>{children}</ul>;
}

List.propTypes = {
  /**
   * List of listItems to render
   */
  children: PropTypes.node.isRequired,
  /**
   * Reference to the corresponding listItems list
   */
  listRef: PropTypes.func,
  /**
   * Override the styles of the root element
   */
  style: PropTypes.instanceOf(Object)
};

List.defaultProps = {
  style: {},
  listRef: () => {}
};

export default pure(Radium(List));
