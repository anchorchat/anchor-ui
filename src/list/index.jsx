import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import getStyles from './get-styles';

const displayName = 'List';

const propTypes = {
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

const defaultProps = {
  header: null,
  style: {},
  headerStyle: {},
  listRef: () => {},
  open: true,
  nestedLevel: 0
};

/** A wrapper for ListItems */
const List = ({
  children, header, listRef, style, headerStyle, open, nestedLevel, ...custom
}) => {
  if (!open) {
    return null;
  }

  const childrenWithProps = React.Children.map(children, child => (
    React.cloneElement(child, { nestedLevel })
  ));

  return (
    <ul ref={listRef} style={getStyles.root(style)} {...custom}>
      {header ? <h1 style={getStyles.listHeader(headerStyle)}>{header}</h1> : null}
      {childrenWithProps}
    </ul>
  );
};

List.displayName = displayName;
List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default Radium(List);
