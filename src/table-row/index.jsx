import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

/** TableRows are used to display data. */
function TableRow({ children, style, ...custom }) {
  return (
    <tr style={getStyles.root(style)} {...custom}>
      {children}
    </tr>
  );
}

TableRow.displayName = 'TableRow';

TableRow.propTypes = {
  /** The TableRow's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

TableRow.defaultProps = {
  style: {}
};

export default TableRow;
