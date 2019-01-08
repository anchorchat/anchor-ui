import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconPlus = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color} transform="translate(3, 3)">
      <path d="M8.95125,17.90625 C8.5365,17.90625 8.20125,17.57025 8.20125,17.15625 L8.20125,0.75 C8.20125,0.336 8.5365,0 8.95125,0 C9.366,0 9.70125,0.336 9.70125,0.75 L9.70125,17.15625 C9.70125,17.57025 9.366,17.90625 8.95125,17.90625" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M17.15625,9.70275 L0.75,9.70275 C0.33525,9.70275 0,9.3675 0,8.95275 C0,8.53875 0.33525,8.20275 0.75,8.20275 L17.15625,8.20275 C17.57025,8.20275 17.90625,8.53875 17.90625,8.95275 C17.90625,9.3675 17.57025,9.70275 17.15625,9.70275" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
    </g>
  </svg>
);

IconPlus.propTypes = {
  color: PropTypes.string
};

IconPlus.defaultProps = {
  color: colors.icons
};

IconPlus.displayName = 'IconPlus';

export default IconPlus;
