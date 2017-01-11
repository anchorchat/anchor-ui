import React, { PropTypes } from 'react';
import colors from '../style/colors';

function IconSend({ color }) {
  return (
    <svg fill={color} height="24" viewBox="0 0 24 24" width="24">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

IconSend.propTypes = {
  color: PropTypes.string
};

IconSend.defaultProps = {
  color: colors.icons
};

export default IconSend;
