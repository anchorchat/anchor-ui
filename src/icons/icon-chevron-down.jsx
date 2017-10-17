import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconChevronDown = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill={color}>
      <path d="M14.34,17.68025 C14.08,17.68025 13.83,17.58325 13.63,17.38725 L8.79,12.54725 C8.6,12.35925 8.5,12.10525 8.5,11.84025 C8.5,11.57525 8.6,11.32025 8.79,11.13325 L13.63,6.29325 C14.02,5.90225 14.65,5.90225 15.05,6.29325 C15.44,6.68425 15.44,7.31725 15.05,7.70725 L10.91,11.84025 L15.05,15.97325 C15.44,16.36325 15.44,16.99725 15.05,17.38725 C14.85,17.58325 14.59,17.68025 14.34,17.68025" transform="translate(12, 12) rotate(-90) translate(-12, -12)" />
    </g>
  </svg>
);

IconChevronDown.propTypes = {
  color: PropTypes.string
};

IconChevronDown.defaultProps = {
  color: colors.icons
};

IconChevronDown.displayName = 'IconChevronDown';

export default IconChevronDown;
