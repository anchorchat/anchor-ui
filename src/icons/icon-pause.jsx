import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconPause = ({ color, ...custom }) => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <path d="m8.93203125 21h-3.4890625c-.24609375 0-.44296875-.2025-.44296875-.45v-17.1c0-.2475.196875-.45.44296875-.45h3.4890625c.24609375 0 .44296875.2025.44296875.45v17.1c0 .2475-.196875.45-.44296875.45zm9.62499995 0h-3.4890625c-.2460937 0-.4429687-.2025-.4429687-.45v-17.1c0-.2475.196875-.45.4429687-.45h3.4890625c.2460938 0 .4429688.2025.4429688.45v17.1c0 .2475-.196875.45-.4429688.45z" fill={color} /> {/* eslint-disable-line max-len */}
  </svg>
);

IconPause.propTypes = {
  color: PropTypes.string
};

IconPause.defaultProps = {
  color: colors.icons
};

IconPause.displayName = 'IconPause';

export default IconPause;
