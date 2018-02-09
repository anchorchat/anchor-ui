import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import getStyles from './get-styles';

/** TableHeaderColumns are used to display data. */
const TableHeaderColumn = ({ children, style, ...custom }) => (
  <th style={getStyles.root(style)} {...custom}>
    {children}
  </th>
);

TableHeaderColumn.displayName = 'TableHeaderColumn';

TableHeaderColumn.propTypes = {
  /** The TableHeaderColumn's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

TableHeaderColumn.defaultProps = {
  style: {}
};

export default Radium(TableHeaderColumn);
