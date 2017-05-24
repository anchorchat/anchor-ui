import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

const IconRocket = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M9.58,14.0066668 C9.6825,14.0175001 9.78833333,14.0275001 9.8975,14.0350001 C10.1383333,14.0516668 10.3583333,14.1708334 10.5025,14.3625001 C11.445,15.6058334 11.8991667,17.1241668 11.8291667,18.6283334 C12.8908333,17.5075001 13.3316667,15.9366668 13.0125,14.3966668 C12.9291667,13.9983334 13.1458333,13.5991668 13.525,13.4516668 C14.7541667,12.9708334 15.8475,12.2550001 16.7791667,11.3233334 C18.7625,9.34083343 19.7625,6.6275001 19.4658333,4.11833343 C16.95,3.82166676 14.2316667,4.83666676 12.2625,6.80583343 C11.3316667,7.73583343 10.615,8.83083343 10.1333333,10.0600001 C9.985,10.4383334 9.58666667,10.6533334 9.18916667,10.5725001 C7.66583333,10.2600001 6.07083333,10.7025001 4.95916667,11.7541668 C6.47,11.6833334 8.00583333,12.1600001 9.22166667,13.0825001 C9.41416667,13.2266668 9.5325,13.4466668 9.55083333,13.6858334 C9.55916667,13.7975001 9.56833333,13.9041668 9.58,14.0066668 Z M10.5675,21.3216668 C10.3516667,21.3216668 10.1383333,21.2366668 9.97833333,21.0766668 C9.73916667,20.8375001 9.66916667,20.4766668 9.8,20.1641668 C10.4183333,18.6991668 10.2525,17.0058334 9.38,15.6616668 C9.1375,15.6350001 8.9075,15.6000001 8.68666667,15.5558334 C8.35583333,15.4900001 8.0975,15.2325001 8.03083333,14.9025001 C7.98666667,14.6841668 7.9525,14.4541668 7.925,14.2058334 C6.595,13.3441668 4.85833333,13.1783334 3.42083333,13.7825001 C3.10833333,13.9125001 2.7475,13.8425001 2.50833333,13.6033334 C2.26916667,13.3641668 2.19916667,13.0033334 2.32916667,12.6908334 C2.65083333,11.9266668 3.10666667,11.2458334 3.68666667,10.6658334 C5.0375,9.31583343 6.9175,8.64333343 8.84416667,8.83666676 C9.39583333,7.6400001 10.1483333,6.5625001 11.0841667,5.62666676 C13.135,3.57666676 15.8658333,2.4000001 18.5791667,2.4000001 C19.1825,2.4000001 19.78,2.45833343 20.3583333,2.57333343 C20.6866667,2.6400001 20.9458333,2.8975001 21.0108333,3.2275001 C21.65,6.42666676 20.48,9.9800001 17.9575,12.5025001 C17.0216667,13.4383334 15.9458333,14.1891668 14.7491667,14.7408334 C14.94,16.6508334 14.2808333,18.5383334 12.9183333,19.8983334 C12.3433333,20.4750001 11.6616667,20.9325001 10.8916667,21.2558334 C10.7858333,21.3000001 10.6766667,21.3216668 10.5675,21.3216668 L10.5675,21.3216668 Z" />
      <path d="M15.8383333,6.4950001 C15.5041667,6.4950001 15.19,6.6250001 14.9525,6.86166676 C14.4658333,7.34916676 14.4675,8.1425001 14.9541667,8.63083343 C15.4266667,9.10083343 16.25,9.10166676 16.7216667,8.6300001 C16.9575,8.39333343 17.0883333,8.0800001 17.0883333,7.74583343 C17.0883333,7.41166676 16.9575,7.0975001 16.7216667,6.86166676 C16.4858333,6.6250001 16.1716667,6.4950001 15.8383333,6.4950001 Z M15.8383333,9.82916676 C15.2833333,9.82916676 14.7591667,9.6125001 14.365,9.2200001 C13.5533333,8.40666676 13.5533333,7.0850001 14.3633333,6.2725001 C15.1541667,5.48416676 16.525,5.48583343 17.3108333,6.2725001 C17.705,6.66583343 17.9216667,7.18916676 17.9216667,7.74583343 C17.9216667,8.3025001 17.705,8.82583343 17.3108333,9.21916676 C16.9191667,9.6125001 16.395,9.82916676 15.8383333,9.82916676 L15.8383333,9.82916676 Z" />
      <path d="M6.36416667,18.4600001 C6.0875,18.4600001 5.81083333,18.4383334 5.535,18.3925001 C5.35916667,18.3633334 5.2225,18.2258334 5.19333333,18.0500001 C4.9075,16.3366668 5.52916667,14.5208334 6.855,13.1925001 C7.01833333,13.0291668 7.28166667,13.0291668 7.44416667,13.1925001 C7.6075,13.3550001 7.6075,13.6183334 7.44416667,13.7816668 C6.38666667,14.8408334 5.84916667,16.2516668 5.97666667,17.6091668 C7.33833333,17.7366668 8.74333333,17.1975001 9.80333333,16.1383334 C9.96583333,15.9766668 10.2291667,15.9766668 10.3925,16.1391668 C10.555,16.3025001 10.555,16.5658334 10.3925,16.7283334 C9.27583333,17.8433334 7.8175,18.4600001 6.36416667,18.4600001" />
      <path d="M9.58,14.0066668 C9.6825,14.0175001 9.78833333,14.0275001 9.8975,14.0350001 C10.1383333,14.0516668 10.3583333,14.1708334 10.5025,14.3625001 C11.445,15.6058334 11.8991667,17.1241668 11.8291667,18.6283334 C12.8908333,17.5075001 13.3316667,15.9366668 13.0125,14.3966668 C12.9291667,13.9983334 13.1458333,13.5991668 13.525,13.4516668 C14.7541667,12.9708334 15.8475,12.2550001 16.7791667,11.3233334 C18.7625,9.34083343 19.7625,6.6275001 19.4658333,4.11833343 C16.95,3.82166676 14.2316667,4.83666676 12.2625,6.80583343 C11.3316667,7.73583343 10.615,8.83083343 10.1333333,10.0600001 C9.985,10.4383334 9.58666667,10.6533334 9.18916667,10.5725001 C7.66583333,10.2600001 6.07083333,10.7025001 4.95916667,11.7541668 C6.47,11.6833334 8.00583333,12.1600001 9.22166667,13.0825001 C9.41416667,13.2266668 9.5325,13.4466668 9.55083333,13.6858334 C9.55916667,13.7975001 9.56833333,13.9041668 9.58,14.0066668 Z M10.5675,21.3216668 C10.3516667,21.3216668 10.1383333,21.2366668 9.97833333,21.0766668 C9.73916667,20.8375001 9.66916667,20.4766668 9.8,20.1641668 C10.4183333,18.6991668 10.2525,17.0058334 9.38,15.6616668 C9.1375,15.6350001 8.9075,15.6000001 8.68666667,15.5558334 C8.35583333,15.4900001 8.0975,15.2325001 8.03083333,14.9025001 C7.98666667,14.6841668 7.9525,14.4541668 7.925,14.2058334 C6.595,13.3441668 4.85833333,13.1783334 3.42083333,13.7825001 C3.10833333,13.9125001 2.7475,13.8425001 2.50833333,13.6033334 C2.26916667,13.3641668 2.19916667,13.0033334 2.32916667,12.6908334 C2.65083333,11.9266668 3.10666667,11.2458334 3.68666667,10.6658334 C5.0375,9.31583343 6.9175,8.64333343 8.84416667,8.83666676 C9.39583333,7.6400001 10.1483333,6.5625001 11.0841667,5.62666676 C13.135,3.57666676 15.8658333,2.4000001 18.5791667,2.4000001 C19.1825,2.4000001 19.78,2.45833343 20.3583333,2.57333343 C20.6866667,2.6400001 20.9458333,2.8975001 21.0108333,3.2275001 C21.65,6.42666676 20.48,9.9800001 17.9575,12.5025001 C17.0216667,13.4383334 15.9458333,14.1891668 14.7491667,14.7408334 C14.94,16.6508334 14.2808333,18.5383334 12.9183333,19.8983334 C12.3433333,20.4750001 11.6616667,20.9325001 10.8916667,21.2558334 C10.7858333,21.3000001 10.6766667,21.3216668 10.5675,21.3216668 L10.5675,21.3216668 Z" />
      <path d="M15.8383333,6.4950001 C15.5041667,6.4950001 15.19,6.6250001 14.9525,6.86166676 C14.4658333,7.34916676 14.4675,8.1425001 14.9541667,8.63083343 C15.4266667,9.10083343 16.25,9.10166676 16.7216667,8.6300001 C16.9575,8.39333343 17.0883333,8.0800001 17.0883333,7.74583343 C17.0883333,7.41166676 16.9575,7.0975001 16.7216667,6.86166676 C16.4858333,6.6250001 16.1716667,6.4950001 15.8383333,6.4950001 Z M15.8383333,9.82916676 C15.2833333,9.82916676 14.7591667,9.6125001 14.365,9.2200001 C13.5533333,8.40666676 13.5533333,7.0850001 14.3633333,6.2725001 C15.1541667,5.48416676 16.525,5.48583343 17.3108333,6.2725001 C17.705,6.66583343 17.9216667,7.18916676 17.9216667,7.74583343 C17.9216667,8.3025001 17.705,8.82583343 17.3108333,9.21916676 C16.9191667,9.6125001 16.395,9.82916676 15.8383333,9.82916676 L15.8383333,9.82916676 Z" />
      <path d="M6.36416667,18.4600001 C6.0875,18.4600001 5.81083333,18.4383334 5.535,18.3925001 C5.35916667,18.3633334 5.2225,18.2258334 5.19333333,18.0500001 C4.9075,16.3366668 5.52916667,14.5208334 6.855,13.1925001 C7.01833333,13.0291668 7.28166667,13.0291668 7.44416667,13.1925001 C7.6075,13.3550001 7.6075,13.6183334 7.44416667,13.7816668 C6.38666667,14.8408334 5.84916667,16.2516668 5.97666667,17.6091668 C7.33833333,17.7366668 8.74333333,17.1975001 9.80333333,16.1383334 C9.96583333,15.9766668 10.2291667,15.9766668 10.3925,16.1391668 C10.555,16.3025001 10.555,16.5658334 10.3925,16.7283334 C9.27583333,17.8433334 7.8175,18.4600001 6.36416667,18.4600001" />
    </g>
  </svg>
);

IconRocket.propTypes = {
  color: PropTypes.string
};

IconRocket.defaultProps = {
  color: colors.icons
};

IconRocket.displayName = 'IconRocket';

export default pure(IconRocket);
