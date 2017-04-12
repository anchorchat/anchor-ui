import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconRadio({ color, ...custom }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
      <g fill={color}>
        <path d="M12,7.5 C9.48,7.5 7.5,9.48 7.5,12 C7.5,14.52 9.48,16.5 12,16.5 C14.52,16.5 16.5,14.52 16.5,12 C16.5,9.48 14.52,7.5 12,7.5 L12,7.5 Z M12,3 C7.05,3 3,7.05 3,12 C3,16.95 7.05,21 12,21 C16.95,21 21,16.95 21,12 C21,7.05 16.95,3 12,3 L12,3 Z M12,19.2 C8.04,19.2 4.8,15.96 4.8,12 C4.8,8.04 8.04,4.8 12,4.8 C15.96,4.8 19.2,8.04 19.2,12 C19.2,15.96 15.96,19.2 12,19.2 L12,19.2 Z" />
      </g>
    </svg>
  );
}

IconRadio.propTypes = {
  color: PropTypes.string
};

IconRadio.defaultProps = {
  color: colors.icons
};

IconRadio.displayName = 'IconRadio';

export default pure(IconRadio);
