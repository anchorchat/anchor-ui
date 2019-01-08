import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconSymbols = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M9.3375,8.94 L9.3375,10.26 C9.54,10.215 9.6975,10.14 9.81,10.0125 C9.9225,9.8925 9.975,9.75 9.975,9.585 C9.975,9.4125 9.9225,9.2775 9.81,9.18 C9.705,9.0825 9.5475,9 9.3375,8.94 Z M8.955,8.04 L8.955,6.885 C8.79,6.9375 8.655,6.9975 8.5575,7.08 C8.4675,7.1625 8.415,7.29 8.415,7.455 C8.415,7.6125 8.46,7.74 8.55,7.815 C8.64,7.8975 8.775,7.9725 8.955,8.04 Z M9.3375,5.97 L9.3375,6.2925 C9.555,6.315 9.7425,6.36 9.8925,6.4275 C10.05,6.495 10.1775,6.5925 10.2975,6.7275 C10.3875,6.8325 10.455,6.9375 10.5075,7.05 C10.5525,7.155 10.5825,7.2525 10.5825,7.3425 C10.5825,7.4475 10.545,7.53 10.47,7.605 C10.395,7.68 10.305,7.7175 10.2,7.7175 C10.005,7.7175 9.8775,7.6125 9.8175,7.395 C9.75,7.1475 9.5925,6.975 9.3375,6.8925 L9.3375,8.1525 C9.585,8.22 9.7875,8.28 9.9375,8.34 C10.08,8.3925 10.215,8.475 10.335,8.58 C10.455,8.6925 10.5525,8.8275 10.62,8.9775 C10.6875,9.135 10.7175,9.3 10.7175,9.4875 C10.7175,9.7125 10.665,9.93 10.56,10.1325 C10.455,10.3275 10.2975,10.4925 10.0875,10.62 C9.8775,10.7475 9.6225,10.8225 9.3375,10.845 L9.3375,11.6025 C9.3375,11.715 9.33,11.805 9.3,11.8575 C9.2775,11.91 9.2325,11.94 9.15,11.94 C9.075,11.94 9.03,11.9175 9,11.8725 C8.97,11.8275 8.955,11.76 8.955,11.67 L8.955,10.8525 C8.7225,10.83 8.5125,10.77 8.34,10.6875 C8.16,10.605 8.0175,10.5 7.8975,10.3725 C7.7775,10.245 7.695,10.1175 7.635,9.9825 C7.5825,9.84 7.5525,9.7125 7.5525,9.5775 C7.5525,9.48 7.59,9.3975 7.665,9.315 C7.74,9.24 7.83,9.2025 7.9425,9.2025 C8.04,9.2025 8.115,9.225 8.175,9.2625 C8.235,9.3075 8.28,9.3675 8.3025,9.4425 C8.3625,9.6075 8.4075,9.735 8.445,9.825 C8.49,9.9075 8.55,9.99 8.6325,10.065 C8.715,10.1325 8.82,10.1925 8.955,10.23 L8.955,8.8275 C8.685,8.7525 8.46,8.67 8.28,8.5725 C8.1,8.4825 7.95,8.355 7.8375,8.1825 C7.725,8.0175 7.6725,7.8 7.6725,7.53 C7.6725,7.185 7.7775,6.9 8.0025,6.6825 C8.22,6.4575 8.5425,6.33 8.955,6.2925 L8.955,5.9775 C8.955,5.805 9.015,5.7225 9.1425,5.7225 C9.2775,5.7225 9.3375,5.805 9.3375,5.97 L9.3375,5.97 Z" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M14.34,9.3975 C14.415,10.125 14.64,10.485 15.0375,10.485 C15.18,10.485 15.315,10.4475 15.435,10.3725 C15.5625,10.305 15.675,10.14 15.7875,9.8775 C15.8625,9.7125 15.9225,9.6075 15.975,9.5625 L16.1475,9.5025 C16.2675,9.5025 16.365,9.54 16.425,9.6075 C16.4925,9.675 16.53,9.7725 16.53,9.9 C16.53,10.1925 16.3875,10.47 16.095,10.7175 C15.8025,10.9725 15.4575,11.0925 15.045,11.0925 C14.655,11.0925 14.3175,10.9575 14.0325,10.6725 C13.74,10.395 13.5675,9.9675 13.515,9.3975 L13.1325,9.3975 L13.0725,9.3225 C13.0725,9.27 13.095,9.21 13.1325,9.1275 C13.17,9.0525 13.2,9.015 13.23,9.015 L13.4925,9.015 L13.4925,8.9025 C13.4925,8.82 13.4925,8.6925 13.5,8.52 L13.1325,8.52 L13.0725,8.445 C13.0725,8.3925 13.095,8.3325 13.1325,8.25 C13.17,8.175 13.2,8.1375 13.23,8.1375 L13.53,8.1375 C13.665,7.0875 14.16,6.5625 15.015,6.5625 C15.3975,6.5625 15.72,6.66 15.9975,6.8625 C16.2675,7.0575 16.41,7.2975 16.41,7.59 C16.41,7.6875 16.3725,7.77 16.3125,7.8375 C16.245,7.905 16.17,7.9425 16.0725,7.9425 C15.975,7.9425 15.9,7.9125 15.8475,7.86 C15.8025,7.8075 15.7575,7.725 15.705,7.62 C15.6525,7.4775 15.5775,7.365 15.5025,7.29 C15.42,7.215 15.285,7.1775 15.09,7.1775 C14.865,7.1775 14.7,7.2525 14.58,7.41 C14.46,7.5675 14.3775,7.8075 14.3475,8.1375 L15.3225,8.1375 L15.3825,8.22 C15.3825,8.2725 15.36,8.34 15.3225,8.415 C15.285,8.49 15.255,8.52 15.225,8.52 L14.325,8.52 L14.3175,8.82 C14.3175,8.91 14.3175,8.9775 14.325,9.015 L15.3225,9.015 L15.3825,9.09 C15.3825,9.15 15.36,9.2175 15.3225,9.285 C15.285,9.36 15.255,9.3975 15.225,9.3975 L14.34,9.3975" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M8.7675,15.0375 L9.2175,15.0375 C9.3825,15.0375 9.51,15.06 9.6,15.09 C9.69,15.1275 9.735,15.2025 9.735,15.3225 C9.735,15.405 9.705,15.48 9.645,15.5325 C9.585,15.585 9.5025,15.6075 9.4125,15.6075 L8.8725,15.6075 L8.8725,15.66 C8.8725,15.8625 8.8275,16.05 8.7375,16.2225 C8.6475,16.3875 8.49,16.605 8.2575,16.86 L8.46,16.815 C8.52,16.8 8.595,16.785 8.6775,16.7775 C8.76,16.7625 8.85,16.755 8.9475,16.755 C9.075,16.755 9.27,16.77 9.51,16.8075 C9.75,16.8375 9.9075,16.8525 9.99,16.8525 C10.1025,16.8525 10.23,16.83 10.3575,16.7925 C10.4925,16.7475 10.575,16.725 10.605,16.725 C10.695,16.725 10.7775,16.7625 10.8525,16.8375 C10.92,16.9125 10.9575,16.995 10.9575,17.0925 C10.9575,17.2575 10.86,17.385 10.6725,17.475 C10.485,17.565 10.2825,17.61 10.0725,17.61 C9.9375,17.61 9.57,17.5425 8.955,17.4 L8.8725,17.3775 L8.7375,17.3475 C8.6775,17.34 8.61,17.3325 8.5275,17.3325 C8.445,17.3325 8.37,17.3475 8.31,17.37 C8.2425,17.3925 8.13,17.4375 7.9725,17.505 C7.815,17.565 7.71,17.6025 7.65,17.6025 C7.575,17.6025 7.5,17.565 7.425,17.4975 C7.3575,17.43 7.32,17.3325 7.32,17.22 L7.3575,17.0925 L7.4775,16.935 C7.5375,16.875 7.62,16.7925 7.7325,16.695 C7.8375,16.6125 7.92,16.4925 7.9875,16.335 C8.0625,16.1775 8.1,16.0275 8.1,15.8775 C8.1,15.8175 8.085,15.735 8.0625,15.6075 L7.815,15.6075 C7.665,15.6075 7.5525,15.5925 7.4775,15.555 C7.4025,15.5175 7.365,15.4425 7.365,15.3375 C7.365,15.135 7.4925,15.0375 7.7475,15.0375 L7.9275,15.0375 C7.8225,14.73 7.7775,14.4825 7.7775,14.295 C7.7775,14.0475 7.8375,13.83 7.95,13.635 C8.07,13.44 8.235,13.29 8.4525,13.185 C8.67,13.0725 8.9175,13.02 9.195,13.02 C9.4425,13.02 9.66,13.05 9.8325,13.11 C10.0125,13.17 10.17,13.275 10.305,13.41 C10.5375,13.6575 10.6575,13.92 10.6575,14.19 C10.6575,14.2875 10.62,14.3775 10.5375,14.4525 C10.4625,14.5275 10.3725,14.5725 10.26,14.5725 C10.065,14.5725 9.9375,14.46 9.87,14.2425 C9.81,14.0325 9.735,13.8825 9.63,13.7775 C9.5325,13.68 9.39,13.6275 9.225,13.6275 C9.0375,13.6275 8.8875,13.6875 8.775,13.8075 C8.6625,13.9275 8.6025,14.085 8.6025,14.2725 C8.6025,14.385 8.6175,14.4975 8.64,14.595 C8.6625,14.6925 8.7075,14.8425 8.7675,15.0375" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M13.74,16.185 L14.415,16.185 L14.415,15.75 L13.74,15.75 C13.4475,15.75 13.305,15.66 13.305,15.4725 C13.305,15.285 13.4475,15.1875 13.74,15.1875 L14.1225,15.1875 L13.2225,13.7775 C13.1475,13.665 13.1025,13.5825 13.0725,13.5375 L13.0425,13.3725 C13.0425,13.2675 13.0725,13.185 13.14,13.125 C13.2,13.0575 13.2825,13.0275 13.38,13.0275 C13.485,13.0275 13.5675,13.0575 13.635,13.1175 C13.695,13.185 13.77,13.2825 13.8525,13.425 L14.8275,14.9475 L15.705,13.5075 L15.8025,13.335 L15.9075,13.1775 L16.0425,13.065 C16.0875,13.0425 16.155,13.0275 16.2225,13.0275 C16.32,13.0275 16.4025,13.0575 16.47,13.1175 C16.53,13.1775 16.56,13.2525 16.56,13.3425 C16.56,13.4175 16.5525,13.4775 16.5225,13.5375 C16.5,13.5975 16.4625,13.6725 16.4025,13.755 L15.54,15.1875 L15.9225,15.1875 C16.2,15.1875 16.3425,15.285 16.3425,15.4725 C16.3425,15.66 16.2,15.75 15.9225,15.75 L15.24,15.75 L15.24,16.185 L15.9225,16.185 C16.2,16.185 16.3425,16.2825 16.3425,16.47 C16.3425,16.6575 16.2,16.7475 15.9225,16.7475 L15.24,16.7475 L15.24,16.9875 C15.24,17.4 15.105,17.6025 14.8275,17.6025 C14.5575,17.6025 14.415,17.4 14.415,16.9875 L14.415,16.7475 L13.74,16.7475 C13.4475,16.7475 13.305,16.6575 13.305,16.47 C13.305,16.2825 13.4475,16.185 13.74,16.185" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M4.5,19.3725 L19.38,19.3725 L19.38,4.5 L4.5,4.5 L4.5,19.3725 Z M20.13,20.8725 L3.75,20.8725 C3.3375,20.8725 3,20.5425 3,20.1225 L3,3.75 C3,3.3375 3.3375,3 3.75,3 L20.13,3 C20.5425,3 20.88,3.3375 20.88,3.75 L20.88,20.1225 C20.88,20.5425 20.5425,20.8725 20.13,20.8725 L20.13,20.8725 Z" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
    </g>
  </svg>
);

IconSymbols.propTypes = {
  color: PropTypes.string
};

IconSymbols.defaultProps = {
  color: colors.icons
};

IconSymbols.displayName = 'IconSymbols';

export default IconSymbols;
