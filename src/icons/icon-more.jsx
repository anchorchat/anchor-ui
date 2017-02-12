import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import { colors } from '../settings';

function IconMore({ color }) {
  return (
    <svg fill={color} height="24" viewBox="0 0 24 24" width="24">
      <g fill="#C4C4C4">
        <circle cx="12.5" cy="19.5" r="1.875" />
        <circle cx="12.5" cy="12" r="1.875" />
        <circle cx="12.5" cy="4.5" r="1.875" />
      </g>
    </svg>
  );
}

IconMore.propTypes = {
  color: PropTypes.string
};

IconMore.defaultProps = {
  color: colors.icons
};

IconMore.displayName = 'IconMore';

export default pure(IconMore);
