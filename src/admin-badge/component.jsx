import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const displayName = 'AdminBadge';

const propTypes = {
  /** The badge's text */
  text: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Inverts color */
  inverted: PropTypes.bool,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  inverted: false,
  text: 'Admin'
};

/** Used for displaying a user's Admin role */
const AdminBadge = ({
  text, inverted, style, color, ...custom
}) => (
  <span style={getStyles.root(color, inverted, style)} {...custom}>
    {text}
  </span>
);

AdminBadge.displayName = displayName;
AdminBadge.propTypes = propTypes;
AdminBadge.defaultProps = defaultProps;

export default AdminBadge;
