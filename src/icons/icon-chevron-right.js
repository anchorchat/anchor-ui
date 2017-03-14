import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import colors from '../settings/colors';

function IconChevronRight({ color }) {
  return (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
      <g fill={color}>
        <path d="M14.84,17.68025 C14.58,17.68025 14.33,17.58325 14.13,17.38725 L9.29,12.54725 C9.1,12.35925 9,12.10525 9,11.84025 C9,11.57525 9.1,11.32025 9.29,11.13325 L14.13,6.29325 C14.52,5.90225 15.15,5.90225 15.55,6.29325 C15.94,6.68425 15.94,7.31725 15.55,7.70725 L11.41,11.84025 L15.55,15.97325 C15.94,16.36325 15.94,16.99725 15.55,17.38725 C15.35,17.58325 15.09,17.68025 14.84,17.68025" transform="translate(12.421250, 11.840125) scale(-1, 1) translate(-12.421250, -11.840125)" />
      </g>
    </svg>
  );
}

IconChevronRight.propTypes = {
  color: PropTypes.string
};

IconChevronRight.defaultProps = {
  color: colors.icons
};

IconChevronRight.displayName = 'IconChevronRight';

export default pure(IconChevronRight);
