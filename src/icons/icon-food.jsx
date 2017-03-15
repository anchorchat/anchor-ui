import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconFood({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M7.17215914,14.216 C5.74781132,14.312 4.53476784,15.536 4.56607219,16.864 C4.5582461,18.296 5.6382461,20.936 7.17215914,21.016 C8.70607219,20.936 9.7782461,18.296 9.7782461,16.88 C9.80172436,15.544 8.58868088,14.312 7.17215914,14.216 Z M7.17215914,22.616 L7.14868088,22.616 C4.41737654,22.528 2.99302871,18.832 3.0008548,16.88 C2.95389827,14.696 4.84781132,12.736 7.13302871,12.616 L7.21128958,12.616 C9.49650697,12.736 11.39042,14.696 11.3434635,16.896 C11.3434635,18.832 9.91911567,22.528 7.19563741,22.616 L7.17215914,22.616 L7.17215914,22.616 Z" />
        <path d="M8.34607219,14.088 L8.32259393,14.08 C7.88433306,14.072 7.54781132,13.704 7.56346349,13.256 L7.81389827,4.992 C7.82172436,4.92 7.77476784,4.848 7.73563741,4.808 C7.61042001,4.68 7.39911567,4.6 7.17215914,4.6 C6.94520262,4.6 6.73389827,4.68 6.60868088,4.808 C6.56955045,4.848 6.52259393,4.92 6.52259393,4.992 L6.7808548,13.256 C6.78868088,13.704 6.45215914,14.072 6.02172436,14.08 C5.60694175,14.128 5.23128958,13.752 5.21563741,13.312 L4.95737654,5.048 C4.94172436,4.552 5.12955045,4.072 5.48172436,3.696 C5.90433306,3.256 6.51476784,3 7.17215914,3 C7.82172436,3 8.43998523,3.256 8.85476784,3.696 C9.21476784,4.072 9.40259393,4.552 9.37911567,5.048 L9.12868088,13.312 C9.11302871,13.744 8.76868088,14.088 8.34607219,14.088" />
        <path d="M17.8860722,14.088 L17.8547678,14.08 C17.4243331,14.072 17.0878113,13.704 17.1034635,13.256 L17.3538983,4.992 C17.3538983,4.92 17.3069418,4.848 17.2678113,4.808 C17.1425939,4.68 16.9312896,4.6 16.7121591,4.6 L16.7043331,4.6 C16.4773765,4.6 16.2738983,4.68 16.1486809,4.808 C16.1095504,4.848 16.0625939,4.92 16.0625939,4.992 L16.3130287,13.256 C16.3286809,13.704 15.9921591,14.072 15.5617244,14.08 C15.1156374,14.128 14.7634635,13.752 14.7556374,13.312 L14.4973765,5.048 C14.4817244,4.552 14.6695504,4.072 15.0217244,3.696 C15.436507,3.256 16.0547678,3 16.7043331,3 L16.7121591,3 C17.3617244,3 17.9721591,3.256 18.3947678,3.696 C18.7469418,4.072 18.9347678,4.552 18.9191157,5.048 L18.6608548,13.312 C18.6530287,13.744 18.3008548,14.088 17.8860722,14.088" />
        <path d="M20.1634635,22.616 C19.7330287,22.616 19.3808548,22.256 19.3808548,21.816 L19.3808548,17.28 C19.3808548,15.776 18.1834635,14.552 16.7121591,14.552 C15.2330287,14.552 14.0356374,15.776 14.0356374,17.28 L14.0356374,21.816 C14.0356374,22.256 13.6834635,22.616 13.2530287,22.616 C12.8225939,22.616 12.47042,22.256 12.47042,21.816 L12.47042,17.28 C12.47042,14.896 14.3721591,12.952 16.7121591,12.952 C19.0443331,12.952 20.9460722,14.896 20.9460722,17.28 L20.9460722,21.816 C20.9460722,22.256 20.5938983,22.616 20.1634635,22.616" />
        <path d="M15.5538983,22.616 C15.1234635,22.616 14.7712896,22.256 14.7712896,21.816 L14.7712896,18.464 C14.7712896,18.024 15.1234635,17.664 15.5538983,17.664 C15.9921591,17.664 16.336507,18.024 16.336507,18.464 L16.336507,21.816 C16.336507,22.256 15.9921591,22.616 15.5538983,22.616" />
        <path d="M17.8625939,22.616 C17.4243331,22.616 17.0799852,22.256 17.0799852,21.816 L17.0799852,18.464 C17.0799852,18.024 17.4243331,17.664 17.8625939,17.664 C18.2930287,17.664 18.6452026,18.024 18.6452026,18.464 L18.6452026,21.816 C18.6452026,22.256 18.2930287,22.616 17.8625939,22.616" />
      </g>
    </svg>
  );
}

IconFood.propTypes = {
  color: PropTypes.string
};

IconFood.defaultProps = {
  color: colors.icons
};

IconFood.displayName = 'IconFood';

export default pure(IconFood);
