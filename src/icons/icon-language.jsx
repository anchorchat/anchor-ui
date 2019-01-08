import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconLanguage = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M11.9025,4.5 C7.8225,4.5 4.5,7.8225 4.5,11.90625 C4.5,15.99075 7.8225,19.3125 11.9025,19.3125 C15.99,19.3125 19.3125,15.99075 19.3125,11.90625 C19.3125,7.8225 15.99,4.5 11.9025,4.5 Z M11.9025,20.8125 C6.99,20.8125 3,16.81725 3,11.90625 C3,6.99525 6.99,3 11.9025,3 C16.815,3 20.8125,6.99525 20.8125,11.90625 C20.8125,16.81725 16.815,20.8125 11.9025,20.8125 L11.9025,20.8125 Z" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M11.9025,4.125 C9.51,4.125 7.56,7.61625 7.56,11.90625 C7.56,16.197 9.51,19.6875 11.9025,19.6875 C14.295,19.6875 16.245,16.197 16.245,11.90625 C16.245,7.61625 14.295,4.125 11.9025,4.125 Z M11.9025,20.4375 C9.0975,20.4375 6.81,16.61025 6.81,11.90625 C6.81,7.20225 9.0975,3.375 11.9025,3.375 C14.7075,3.375 16.995,7.20225 16.995,11.90625 C16.995,16.61025 14.7075,20.4375 11.9025,20.4375 L11.9025,20.4375 Z" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M12.2775,4.134 L12.2775,19.67925 C16.395,19.48275 19.6875,16.071 19.6875,11.90625 C19.6875,7.7415 16.395,4.3305 12.2775,4.134 Z M11.9025,20.4375 C11.7,20.4375 11.5275,20.27025 11.5275,20.0625 L11.5275,3.75 C11.5275,3.543 11.7,3.375 11.9025,3.375 C16.605,3.375 20.4375,7.20225 20.4375,11.90625 C20.4375,16.61025 16.605,20.4375 11.9025,20.4375 L11.9025,20.4375 Z" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M4.545,14.406 L19.2675,14.406 C19.545,13.59075 19.6875,12.7515 19.6875,11.90625 C19.6875,11.06175 19.545,10.22175 19.2675,9.40575 L4.545,9.40575 C4.26,10.22175 4.125,11.06175 4.125,11.90625 C4.125,12.75 4.26,13.59 4.545,14.406 Z M19.53,15.156 L4.275,15.156 C4.125,15.156 3.9825,15.05925 3.93,14.91375 C3.5625,13.9365 3.375,12.92475 3.375,11.90625 C3.375,10.887 3.5625,9.87525 3.93,8.89875 C3.9825,8.7525 4.125,8.65575 4.2825,8.65575 L19.53,8.65575 C19.6875,8.65575 19.8225,8.7525 19.8825,8.89875 C20.25,9.87525 20.4375,10.887 20.4375,11.90625 C20.4375,12.92625 20.25,13.938 19.8825,14.91375 C19.8225,15.05925 19.6875,15.156 19.53,15.156 L19.53,15.156 Z" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
    </g>
  </svg>
);

IconLanguage.propTypes = {
  color: PropTypes.string
};

IconLanguage.defaultProps = {
  color: colors.icons
};

IconLanguage.displayName = 'IconLanguage';

export default IconLanguage;
