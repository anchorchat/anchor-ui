import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

/** TableBodys are used to display data. */
function TableBody({ children, style, ...custom }) {
  return (
    <tbody style={getStyles.root(style)} {...custom}>
      {children}
    </tbody>
  );
}

TableBody.displayName = 'TableBody';

TableBody.propTypes = {
  /** The TableBody's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

TableBody.defaultProps = {
  style: {}
};

export default TableBody;
