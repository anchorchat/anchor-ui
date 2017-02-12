import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/lists';
import combineStyles from '../internal/combine-styles';

/**
 * List
 */
function List({ children, listRef, style }) {
  return <ul ref={listRef} style={combineStyles(styles.list, style)}>{children}</ul>;
}

List.displayName = 'List';

List.propTypes = {
  /**
   * ListItems to render
   */
  children: PropTypes.node.isRequired,
  /**
   * Reference list element
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
