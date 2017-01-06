import React, { PropTypes } from 'react';
import colors from '../style/colors';

function IconChevronLeft({ color }) {
  const fill = color || colors.icons;

  return (
    <svg fill={fill} height="24" viewBox="0 0 24 24" width="24">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

IconChevronLeft.propTypes = {
  color: PropTypes.string
};

export default IconChevronLeft;
