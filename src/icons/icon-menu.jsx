import React, { PropTypes } from 'react';
import colors from '../style/colors';

function IconMenu({ color }) {
  return (
    <svg fill={color} height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}

IconMenu.propTypes = {
  color: PropTypes.string
};

IconMenu.defaultProps = {
  color: colors.icons
};

export default IconMenu;
