import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

const IconQuestion = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M11.7533333,16.1786667 C11.5533333,16.1786667 11.3733333,16.1126667 11.2266667,15.9826667 C11.0733333,15.8513333 11,15.6686667 11,15.434 C11,15.2253333 11.0733333,15.0506667 11.22,14.908 C11.3666667,14.766 11.54,14.6946667 11.7533333,14.6946667 C11.96,14.6946667 12.14,14.766 12.28,14.908 C12.42,15.0506667 12.4933333,15.2253333 12.4933333,15.434 C12.4933333,15.666 12.42,15.8473333 12.2733333,15.98 C12.12,16.112 11.9466667,16.1786667 11.7533333,16.1786667 Z M9.33333333,10.7406667 C9.33333333,10.4266667 9.43333333,10.1086667 9.63333333,9.786 C9.84,9.46333333 10.1333333,9.196 10.52,8.98466667 C10.9066667,8.77333333 11.36,8.66666667 11.8733333,8.66666667 C12.3533333,8.66666667 12.7733333,8.75533333 13.14,8.93266667 C13.5066667,9.10933333 13.7933333,9.35 13.9933333,9.654 C14.1933333,9.95866667 14.2933333,10.2893333 14.2933333,10.6466667 C14.2933333,10.928 14.24,11.174 14.12,11.386 C14.0066667,11.5973333 13.8733333,11.78 13.7133333,11.934 C13.56,12.088 13.2733333,12.3466667 12.8733333,12.71 C12.76,12.8126667 12.6666667,12.9026667 12.6,12.9806667 C12.5333333,13.0586667 12.48,13.1293333 12.4466667,13.194 C12.4133333,13.2586667 12.3866667,13.3233333 12.3733333,13.388 C12.3533333,13.452 12.3266667,13.5653333 12.2866667,13.7273333 C12.2266667,14.0713333 12.0333333,14.2433333 11.7,14.2433333 C11.5266667,14.2433333 11.38,14.1873333 11.2666667,14.0746667 C11.1466667,13.962 11.0866667,13.7953333 11.0866667,13.5733333 C11.0866667,13.296 11.1333333,13.0553333 11.22,12.852 C11.3066667,12.6486667 11.42,12.47 11.56,12.316 C11.7,12.162 11.8933333,11.9793333 12.1333333,11.768 C12.3466667,11.5826667 12.5,11.4426667 12.5933333,11.3486667 C12.6866667,11.254 12.7666667,11.1493333 12.8333333,11.0333333 C12.9,10.918 12.9333333,10.792 12.9333333,10.6566667 C12.9333333,10.392 12.8333333,10.1686667 12.6333333,9.98666667 C12.44,9.80533333 12.1866667,9.714 11.8733333,9.714 C11.5066667,9.714 11.24,9.80533333 11.0666667,9.98933333 C10.9,10.1726667 10.7533333,10.4433333 10.6333333,10.8006667 C10.52,11.174 10.3066667,11.3606667 9.99333333,11.3606667 C9.80666667,11.3606667 9.65333333,11.2953333 9.52666667,11.1653333 C9.39333333,11.0346667 9.33333333,10.8926667 9.33333333,10.7406667 L9.33333333,10.7406667 Z" />
      <path d="M11.8466667,5.33333333 C10.1066667,5.33333333 8.47333333,6.01133333 7.24,7.24133333 C6.00666667,8.47266667 5.33333333,10.1093333 5.33333333,11.8506667 C5.33333333,13.5926667 6.00666667,15.2293333 7.24,16.46 C8.47333333,17.6906667 10.1066667,18.368 11.8466667,18.368 C13.5866667,18.368 15.2266667,17.69 16.46,16.4586667 C19,13.918 19,9.78266667 16.46,7.24133333 C15.2266667,6.01133333 13.5933333,5.33333333 11.8466667,5.33333333 Z M11.8466667,19.7013333 C9.75333333,19.7013333 7.78,18.8853333 6.3,17.4033333 C4.81333333,15.92 4,13.9486667 4,11.8506667 C4,9.75333333 4.81333333,7.78133333 6.3,6.29866667 C7.78,4.81666667 9.75333333,4 11.8466667,4 C13.9466667,4 15.92,4.81666667 17.4,6.29866667 C20.46,9.36 20.46,14.3406667 17.4,17.402 C15.92,18.8846667 13.9466667,19.7013333 11.8466667,19.7013333 L11.8466667,19.7013333 Z" />
    </g>
  </svg>
);

IconQuestion.propTypes = {
  color: PropTypes.string
};

IconQuestion.defaultProps = {
  color: colors.icons
};

IconQuestion.displayName = 'IconQuestion';

export default pure(IconQuestion);
