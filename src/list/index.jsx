import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/lists';
import combineStyles from '../internal/combine-styles';

/** A wrapper for ListItems */
function List({ children, header, listRef, style, headerStyle, ...custom }) {
  return (
    <ul ref={listRef} style={combineStyles(styles.list, style)} {...custom}>
      {header ? <h1 style={combineStyles(styles.listHeader, headerStyle)}>{header}</h1> : null}
      {children}
    </ul>
  );
}

List.displayName = 'List';

List.propTypes = {
  /** ListItems to render */
  children: PropTypes.node.isRequired,
  /** Optional header text */
  header: PropTypes.node,
  /** Reference list element */
  listRef: PropTypes.func,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object)
};

List.defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  listRef: () => {}
};

export default pure(Radium(List));
