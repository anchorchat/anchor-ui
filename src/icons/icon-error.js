import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconError({ color }) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24">
      <g fill={color} transform="translate(3, 3)">
        <path d="M8.8275,1.5 C4.785,1.5 1.5,4.78875 1.5,8.83125 C1.5,10.79025 2.2575,12.63225 3.645,14.0175 C5.025,15.4035 6.87,16.16625 8.8275,16.16625 C12.87,16.16625 16.1625,12.876 16.1625,8.83125 C16.1625,4.78875 12.87,1.5 8.8275,1.5 Z M8.8275,17.66625 C6.4725,17.66625 4.2525,16.74675 2.58,15.078 C0.915,13.40925 0,11.19075 0,8.83125 C0,3.9615 3.96,0 8.8275,0 C13.695,0 17.6625,3.9615 17.6625,8.83125 C17.6625,13.70325 13.695,17.66625 8.8275,17.66625 L8.8275,17.66625 Z" id="Fill-1184" />
        <path d="M3.135,15.294 C2.9475,15.294 2.7525,15.2205 2.61,15.07425 C2.3175,14.781 2.3175,14.30625 2.61,14.01375 L14.01,2.6115 C14.3025,2.319 14.775,2.319 15.0675,2.6115 C15.36,2.90475 15.36,3.3795 15.0675,3.67275 L3.6675,15.07425 C3.5175,15.2205 3.33,15.294 3.135,15.294" id="Fill-1185" />
      </g>
    </svg>
  );
}

IconError.propTypes = {
  color: PropTypes.string
};

IconError.defaultProps = {
  color: colors.icons
};

IconError.displayName = 'IconError';

export default pure(IconError);
