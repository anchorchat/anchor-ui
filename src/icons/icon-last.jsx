import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconLast({ color, ...custom }) {
  return (
    <svg fill={color} height="24" viewBox="0 0 24 24" width="24" {...custom}>
      <g fill={color}>
        <path d="M16.84,17.68025 C16.58,17.68025 16.33,17.58325 16.13,17.38725 L11.29,12.54725 C11.1,12.35925 11,12.10525 11,11.84025 C11,11.57525 11.1,11.32025 11.29,11.13325 L16.13,6.29325 C16.52,5.90225 17.15,5.90225 17.55,6.29325 C17.94,6.68425 17.94,7.31725 17.55,7.70725 L13.41,11.84025 L17.55,15.97325 C17.94,16.36325 17.94,16.99725 17.55,17.38725 C17.35,17.58325 17.09,17.68025 16.84,17.68025" transform="translate(14.421250, 11.840125) scale(-1, 1) translate(-14.421250, -11.840125) " />
        <path d="M11.84,17.68025 C11.58,17.68025 11.33,17.58325 11.13,17.38725 L6.29,12.54725 C6.1,12.35925 6,12.10525 6,11.84025 C6,11.57525 6.1,11.32025 6.29,11.13325 L11.13,6.29325 C11.52,5.90225 12.15,5.90225 12.55,6.29325 C12.94,6.68425 12.94,7.31725 12.55,7.70725 L8.41,11.84025 L12.55,15.97325 C12.94,16.36325 12.94,16.99725 12.55,17.38725 C12.35,17.58325 12.09,17.68025 11.84,17.68025" transform="translate(9.421250, 11.840125) scale(-1, 1) translate(-9.421250, -11.840125) " />
      </g>
    </svg>
  );
}

IconLast.propTypes = {
  color: PropTypes.string
};

IconLast.defaultProps = {
  color: colors.icons
};

IconLast.displayName = 'IconLast';

export default pure(IconLast);
