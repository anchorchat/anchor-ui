import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

/** TableHeaders are used to display data. */
function TableHeader({ children, style }, { color }) {
  return (
    <thead style={getStyles.root(color, style)}>
      {children}
    </thead>
  );
}

TableHeader.displayName = 'TableHeader';

TableHeader.propTypes = {
  /** The TableHeader's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

TableHeader.defaultProps = {
  style: {}
};

TableHeader.contextTypes = {
  color: PropTypes.string
};

export default TableHeader;
