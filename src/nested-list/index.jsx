import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import List from '../list';

/** A wrapper for NestedListItems */
function NestedList({ children, open, header, listRef, style, headerStyle, ...custom }) {
  return (
    open
    ? <List header={header} headerStyle={headerStyle} listRef={listRef} style={style} {...custom}>
      {children}
    </List>
    : null
  );
}

NestedList.displayName = 'NestedList';

NestedList.propTypes = {
  /** NestedListItems to render */
  children: PropTypes.node.isRequired,
  /** Reference list element */
  open: PropTypes.bool.isRequired,
  /** Optional header text */
  header: PropTypes.node,
  /** Reference list element */
  listRef: PropTypes.func,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object)
};

NestedList.defaultProps = {
  style: {},
  header: null,
  headerStyle: {},
  listRef: () => {}
};

export default pure(Radium(NestedList));
