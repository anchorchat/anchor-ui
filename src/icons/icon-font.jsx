import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconFont = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color} transform="translate(3, 3)">
      <path d="M11.5413173,17.5875 C11.2389173,17.5875 10.9581173,17.385 10.8645173,17.07 L6.49411727,3.165 L2.12371727,17.07 C2.00131727,17.4675 1.59091727,17.685 1.21651727,17.55 C0.834917266,17.4225 0.633317266,16.995 0.755717266,16.605 L5.81011727,0.5175 C5.90371727,0.21 6.18451727,0 6.49411727,0 C6.80371727,0 7.07731727,0.21 7.17811727,0.5175 L12.2325173,16.605 C12.3549173,16.995 12.1461173,17.4225 11.7717173,17.55 C11.6925173,17.5725 11.6205173,17.5875 11.5413173,17.5875" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M3.132,18 L0.72,18 C0.3168,18 0,17.6625 0,17.25 C0,16.8375 0.3168,16.5 0.72,16.5 L3.132,16.5 C3.528,16.5 3.852,16.8375 3.852,17.25 C3.852,17.6625 3.528,18 3.132,18" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M12.492,18 L10.08,18 C9.684,18 9.36,17.6625 9.36,17.25 C9.36,16.8375 9.684,16.5 10.08,16.5 L12.492,16.5 C12.888,16.5 13.212,16.8375 13.212,17.25 C13.212,17.6625 12.888,18 12.492,18" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M9.42366454,12 L3.53633546,12 C3.1687876,12 2.88,11.67 2.88,11.25 C2.88,10.8375 3.1687876,10.5 3.53633546,10.5 L9.42366454,10.5 C9.78464904,10.5 10.08,10.8375 10.08,11.25 C10.08,11.67 9.78464904,12 9.42366454,12" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M15.624,4.76852763 C15.3432,4.84352763 15.0264,4.92602763 14.6664,5.00852763 C13.8744,5.18852763 13.32,5.32352763 13.0176,5.40602763 C12.8088,5.46602763 12.6144,5.58602763 12.42,5.75852763 C12.3264,5.84102763 12.24,5.95352763 12.24,6.25352763 C12.24,6.51602763 12.3264,6.71852763 12.5136,6.90602763 C12.636,7.02602763 12.852,7.19102763 13.32,7.19102763 C13.7808,7.19102763 14.184,7.08602763 14.5656,6.87602763 C14.9184,6.68102763 15.1776,6.43352763 15.336,6.14102763 C15.4296,5.96102763 15.5736,5.58602763 15.624,4.76852763 Z M13.32,8.69102763 C12.5928,8.69102763 11.988,8.45102763 11.52,7.99352763 C11.0448,7.52102763 10.8,6.92852763 10.8,6.25352763 C10.8,5.39852763 11.1672,4.89602763 11.4768,4.62602763 C11.8296,4.30352763 12.2184,4.07852763 12.6432,3.95852763 C12.96,3.86852763 13.536,3.73352763 14.3568,3.54602763 C15.1416,3.36602763 15.732,3.19352763 16.1064,3.05102763 C16.3224,2.96102763 16.5744,2.99102763 16.7688,3.13352763 C16.9632,3.27602763 17.0784,3.50102763 17.0784,3.74852763 L17.0784,4.19102763 C17.0784,5.40602763 16.92,6.28352763 16.5888,6.87602763 C16.3008,7.41602763 15.8472,7.86602763 15.2424,8.20352763 C14.6592,8.52602763 14.0112,8.69102763 13.32,8.69102763 L13.32,8.69102763 Z" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
      <path d="M16.7719238,8.7075 C16.3759238,8.7075 16.0519238,8.3775 16.0519238,7.9575 L16.0519238,3.0675 C16.0519238,2.205 15.4399238,1.5 14.6767238,1.5 L14.1799238,1.5 C13.6255238,1.5 13.1287238,1.8675 12.9127238,2.445 C12.7615238,2.8275 12.3367238,3.015 11.9767238,2.8575 C11.6023238,2.7075 11.4223238,2.2725 11.5735238,1.8825 C12.0127238,0.7425 13.0351238,0 14.1799238,0 L14.6767238,0 C16.2319238,0 17.4919238,1.3725 17.4919238,3.0675 L17.4919238,7.9575 C17.4919238,8.3775 17.1751238,8.7075 16.7719238,8.7075" /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
    </g>
  </svg>
);

IconFont.propTypes = {
  color: PropTypes.string
};

IconFont.defaultProps = {
  color: colors.icons
};

IconFont.displayName = 'IconFont';

export default IconFont;
