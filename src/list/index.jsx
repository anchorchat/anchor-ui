import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/lists';
import combineStyles from '../internal/combine-styles';

/** A wrapper for ListItems */
const List = ({ children, header, listRef, style, headerStyle, open, ...custom }) => {
  if (!open) {
    return null;
  }

  return (
    <ul ref={listRef} style={combineStyles(styles.list, style)} {...custom}>
      {header ? <h1 style={combineStyles(styles.listHeader, headerStyle)}>{header}</h1> : null}
      {children}
    </ul>
  );
};

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
  headerStyle: PropTypes.instanceOf(Object),
  /** Toggle the List's visibility */
  open: PropTypes.bool
};

List.defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  listRef: () => {},
  open: true
};

export default pure(Radium(List));
