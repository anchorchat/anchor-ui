import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

const IconNotification = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M3.87522408,19.19175 C3.76272408,19.19175 3.64647408,19.1655 3.53697408,19.11075 C3.16797408,18.92325 3.02022408,18.4725 3.20772408,18.10275 L3.41847408,17.69325 C4.06422408,16.443 4.26072408,16.06575 4.58697408,11.83425 C4.91547408,7.6155 7.80522408,4.67025 11.6167241,4.67025 L12.0757241,4.67025 C12.4897241,4.67025 12.8257241,5.00625 12.8257241,5.42025 C12.8257241,5.83425 12.4897241,6.17025 12.0757241,6.17025 L11.6182241,6.17025 C8.57472408,6.17025 6.35097408,8.49225 6.08247408,11.94975 C5.74572408,16.305 5.52897408,16.87875 4.74972408,18.3825 L4.54647408,18.78 C4.41297408,19.041 4.14897408,19.19175 3.87522408,19.19175" />
      <path d="M19.6822241,19.19175 C19.4084741,19.19175 19.1452241,19.041 19.0132241,18.78 L18.8077241,18.38175 C18.0314741,16.87725 17.8132241,16.3035 17.4764741,11.94975 C17.2072241,8.49225 14.9834741,6.17025 11.9422241,6.17025 L11.4839741,6.17025 C11.0692241,6.17025 10.7339741,5.83425 10.7339741,5.42025 C10.7339741,5.00625 11.0692241,4.67025 11.4839741,4.67025 L11.9407241,4.67025 C15.7522241,4.67025 18.6442241,7.6155 18.9719741,11.83425 C19.3004741,16.065 19.4947241,16.44225 20.1412241,17.69325 L20.3519741,18.10275 C20.5379741,18.4725 20.3902241,18.924 20.0204741,19.11075 C19.9124741,19.1655 19.7969741,19.19175 19.6822241,19.19175" />
      <path d="M19.8097241,19.21875 L19.6574741,19.203 C14.4292241,18.12 9.12822408,18.12075 3.90147408,19.203 C3.49722408,19.284 3.09897408,19.026 3.01572408,18.62025 C2.93172408,18.21525 3.19272408,17.8185 3.59697408,17.7345 C9.02847408,16.60875 14.5319741,16.6095 19.9619741,17.7345 C20.3662241,17.8185 20.6272241,18.21525 20.5439741,18.62025 C20.4704741,18.975 20.1584741,19.21875 19.8097241,19.21875" />
      <path d="M11.7794741,6.015 C11.3647241,6.015 11.0294741,5.679 11.0294741,5.265 L11.0294741,3.75 C11.0294741,3.336 11.3647241,3 11.7794741,3 C12.1942241,3 12.5294741,3.336 12.5294741,3.75 L12.5294741,5.265 C12.5294741,5.679 12.1942241,6.015 11.7794741,6.015" />
      <path d="M11.7779741,20.6175 C10.5419741,20.6175 9.53697408,19.6125 9.53697408,18.37575 C9.53697408,17.96175 9.87222408,17.62575 10.2869741,17.62575 C10.7017241,17.62575 11.0369741,17.96175 11.0369741,18.37575 C11.0369741,18.78525 11.3692241,19.1175 11.7779741,19.1175 C12.1897241,19.1175 12.5234741,18.78525 12.5234741,18.37575 C12.5234741,17.96175 12.8594741,17.62575 13.2734741,17.62575 C13.6882241,17.62575 14.0234741,17.96175 14.0234741,18.37575 C14.0234741,19.6125 13.0162241,20.6175 11.7779741,20.6175" />
    </g>
  </svg>
);

IconNotification.propTypes = {
  color: PropTypes.string
};

IconNotification.defaultProps = {
  color: colors.icons
};

IconNotification.displayName = 'IconNotification';

export default pure(IconNotification);
