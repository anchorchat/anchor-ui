import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import getStyles from './get-styles';

/** TableColumns are used to display data. */
const TableColumn = ({ children, style, ...custom }) => (
  <td style={getStyles.root(style)} {...custom}>
    {children}
  </td>
);

TableColumn.displayName = 'TableColumn';

TableColumn.propTypes = {
  /** The TableColumn's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

TableColumn.defaultProps = {
  style: {}
};

export default Radium(TableColumn);
