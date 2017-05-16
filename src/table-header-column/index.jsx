import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

/** TableHeaderColumns are used to display data. */
function TableHeaderColumn({ children, style, ...custom }) {
  return (
    <th style={getStyles.root(style)} {...custom}>
      {children}
    </th>
  );
}

TableHeaderColumn.displayName = 'TableHeaderColumn';

TableHeaderColumn.propTypes = {
  /** The TableHeaderColumn's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

TableHeaderColumn.defaultProps = {
  style: {}
};

export default TableHeaderColumn;
