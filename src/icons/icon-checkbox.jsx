import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconCheckbox = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z M10,17 L5,12.1923077 L6.4,10.8461538 L10,14.3076923 L17.6,7 L19,8.34615385 L10,17 L10,17 Z" />
    </g>
  </svg>
);

IconCheckbox.propTypes = {
  color: PropTypes.string
};

IconCheckbox.defaultProps = {
  color: colors.icons
};

IconCheckbox.displayName = 'IconCheckbox';

export default IconCheckbox;
