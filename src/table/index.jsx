import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

/** Tables are used to display data. */
function Table({ children, style, ...custom }) {
  return (
    <table style={getStyles.root(style)} {...custom}>
      {children}
    </table>
  );
}

Table.displayName = 'Table';

Table.propTypes = {
  /** The Table's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

Table.defaultProps = {
  style: {}
};

export default Table;
