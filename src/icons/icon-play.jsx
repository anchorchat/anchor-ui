import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconPlay = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <path d="m5 3.46590795v17.06575425c0 .3599895.35543404.584983.63978127.4049882l13.15105953-8.5328771c.2788789-.1799948.2788789-.6243568 0-.8043516l-13.15105953-8.53287715c-.28434723-.18561961-.63978127.03937386-.63978127.3993634z" fill={color} /> {/* eslint-disable-line max-len */}
  </svg>
);

IconPlay.propTypes = {
  color: PropTypes.string
};

IconPlay.defaultProps = {
  color: colors.icons
};

IconPlay.displayName = 'IconPlay';

export default IconPlay;
