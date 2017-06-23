import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

/** A wrapper for ListItems */
const List = ({ children, header, listRef, style, headerStyle, open, nestedLevel, ...custom }) => {
  if (!open) {
    return null;
  }

  const childrenWithProps = React.Children.map(
    children, child => React.cloneElement(
      child,
      {
        nestedLevel
      }
    )
  );

  return (
    <ul ref={listRef} style={getStyles.root(style)} {...custom}>
      {header ? <h1 style={getStyles.listHeader(headerStyle)}>{header}</h1> : null}
      {childrenWithProps}
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
  open: PropTypes.bool,
  /** Nested depth of List. This property is automatically managed, modify at own risk. */
  nestedLevel: PropTypes.number,
};

List.defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  listRef: () => {},
  open: true,
  nestedLevel: 0
};

export default pure(Radium(List));
