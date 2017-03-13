import React, { PropTypes } from 'react';
import Uranium from 'uranium';
import pure from 'recompose/pure';
import styles from '../style/lists';
import combineStyles from '../internal/combine-styles';

/** List */
function List({ children, header, listRef, style, headerStyle }) {
  return (
    <ul ref={listRef} style={combineStyles(styles.list, style)}>
      {header ? <Text style={combineStyles(styles.listHeader, headerStyle)}>{header}</Text> : null}
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

export default pure(Uranium(List));
