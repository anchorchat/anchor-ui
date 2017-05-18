import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

const IconColor = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <circle fill={color} cx="12" cy="12" r="12" />
  </svg>
);

IconColor.propTypes = {
  color: PropTypes.string
};

IconColor.defaultProps = {
  color: colors.theme
};

IconColor.displayName = 'IconColor';

export default pure(IconColor);
