import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconSticker = ({ color, ...custom }) => (
  <svg height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <g fill="none" transform="matrix(.95630476 -.2923717 .2923717 .95630476 .761912 6.024603)">
      <circle cx="5.791261" cy="6.439188" fill={color} r="1.566441" />
      <circle cx="12.208739" cy="6.439188" fill={color} r="1.566441" />
      <path d="m9.7280856 12.251939c0 1.2426407.6715729 2.25 1.5 2.25.8284272 0 1.5-1.0073593 1.5-2.25" stroke={color} transform="matrix(.92718385 -.37460659 .37460659 .92718385 -4.193504 5.180172)" /> {/* eslint-disable-line max-len */}
      <g fill={color}>
        <path d="m5.05921224 13.3769379c.16148572-.1197551 3.99625715-2.8987347 7.88267756 0l.6723551-.9019837c-4.57031021-3.40934698-9.18238776-.033502-9.22852653.000551z" transform="matrix(1 0 0 -1 0 24.329176)" /> {/* eslint-disable-line max-len */}
        <path d="m2.53785306 18h12.92433064c1.3990775 0 2.5378163-1.1387388 2.5378163-2.5378531v-12.92429384c0-1.39940816-1.1387388-2.53785306-2.5378531-2.53785306h-12.92429384c-1.39911428 0-2.53785306 1.1384449-2.53785306 2.53785306v12.92433064c0 1.3990775 1.13873878 2.5378163 2.53785306 2.5378163zm-1.41285306-15.46214694c0-.77892245.63389388-1.41285306 1.41285306-1.41285306h12.92433064c.7789224 0 1.412853.63393061 1.412853 1.41285306v12.92433064c0 .7789224-.6339306 1.412853-1.412853 1.412853h-12.92433064c-.77892245 0-1.41285306-.6339306-1.41285306-1.412853z" /> {/* eslint-disable-line max-len */}
      </g>
    </g>
  </svg>
);

IconSticker.propTypes = {
  color: PropTypes.string
};

IconSticker.defaultProps = {
  color: colors.icons
};

IconSticker.displayName = 'IconSticker';

export default IconSticker;
