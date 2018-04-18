import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const displayName = 'TableHeader';

const propTypes = {
  /** The TableHeader's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {}
};

/** TableHeaders are used to display data. */
const TableHeader = ({
  children,
  style,
  color,
  ...custom
}) => (
  <thead style={getStyles.root(color, style)} {...custom}>
    {children}
  </thead>
);

TableHeader.displayName = displayName;
TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
