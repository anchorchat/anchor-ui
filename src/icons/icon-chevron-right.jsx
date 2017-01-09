import React, { PropTypes } from 'react';
import colors from '../style/colors';

function IconChevronRight({ color }) {
  const fill = color || colors.icons;

  return (
    <svg fill={fill} height="24" viewBox="0 0 24 24" width="24">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

IconChevronRight.propTypes = {
  color: PropTypes.string
};

export default IconChevronRight;
