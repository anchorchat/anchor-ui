import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconSuccess({ color, ...custom }) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" {...custom}>
      <path d="M9.33899069,18.8834583 C9.14715441,18.8834583 8.96371972,18.8050583 8.8313947,18.6664583 L4.19301752,13.7958583 C3.92626707,13.5158583 3.93746919,13.0727583 4.21752215,12.8067583 C4.49687498,12.5400583 4.93935866,12.5505583 5.20750937,12.8305583 L9.30048341,17.1271583 L19.0379249,5.25585834 C19.2843715,4.95835834 19.7247548,4.91285834 20.0237113,5.15855834 C20.323368,5.40425834 20.3660761,5.84525834 20.1210297,6.14415834 L9.88019304,18.6279583 C9.75276894,18.7826583 9.56583359,18.8757583 9.36489559,18.8834583 L9.33899069,18.8834583" id="Fill-1095" fill={color} />
    </svg>
  );
}

IconSuccess.propTypes = {
  color: PropTypes.string
};

IconSuccess.defaultProps = {
  color: colors.icons
};

IconSuccess.displayName = 'IconSuccess';

export default pure(IconSuccess);
