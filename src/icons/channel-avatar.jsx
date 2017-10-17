import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';
import themeable from '../themeable';

const ChannelAvatar = ({ color, inverted, ...custom }) => {
  let background = color;
  let icon = colors.white;

  if (inverted) {
    background = colors.white;
    icon = color;
  }

  return (
    <svg width="40px" height="40px" viewBox="0 0 40 40" {...custom}>
      <circle fill={background} cx="20" cy="20" r="20" />
      <path d="M15.7125793,22.0077782 L16.8403828,17.8002782 L11.75,17.8002782 C11.3375,17.8002782 11,17.4627782 11,17.0502782 C11,16.6377782 11.3375,16.3002782 11.75,16.3002782 L17.2424517,16.3002782 L18.515,11.5527782 C18.62,11.1552782 19.0325,10.9152782 19.4375,11.0277782 C19.835,11.1327782 20.075,11.5452782 19.9625,11.9427782 L18.7964931,16.3002782 L22.9521345,16.3002782 L24.2225,11.5527782 C24.335,11.1552782 24.74,10.9152782 25.145,11.0277782 C25.5425,11.1327782 25.7825,11.5452782 25.6775,11.9427782 L24.5094897,16.3002782 L28.0625,16.3002782 C28.4825,16.3002782 28.8125,16.6377782 28.8125,17.0502782 C28.8125,17.4627782 28.4825,17.8002782 28.0625,17.8002782 L24.1074207,17.8002782 L22.9796172,22.0077782 L28.0625,22.0077782 C28.4825,22.0077782 28.8125,22.3452782 28.8125,22.7577782 C28.8125,23.1702782 28.4825,23.5077782 28.0625,23.5077782 L22.5775483,23.5077782 L21.305,28.2552782 C21.215,28.5927782 20.9075,28.8102782 20.5775,28.8102782 L20.3825,28.7877782 C19.985,28.6752782 19.745,28.2702782 19.8575,27.8652782 L21.0235069,23.5077782 L16.8678655,23.5077782 L15.5975,28.2552782 C15.5075,28.5927782 15.2,28.8102782 14.87,28.8102782 L14.675,28.7877782 C14.2775,28.6752782 14.0375,28.2702782 14.1425,27.8652782 L15.3105103,23.5077782 L11.75,23.5077782 C11.3375,23.5077782 11,23.1702782 11,22.7577782 C11,22.3452782 11.3375,22.0077782 11.75,22.0077782 L15.7125793,22.0077782 Z M17.2692448,22.0077782 L21.4248862,22.0077782 L22.5507552,17.8002782 L18.3951138,17.8002782 L17.2692448,22.0077782 Z" fill={icon} />
    </svg>
  );
};

ChannelAvatar.propTypes = {
  color: PropTypes.string,
  inverted: PropTypes.bool
};

ChannelAvatar.defaultProps = {
  color: colors.theme,
  inverted: false
};

ChannelAvatar.displayName = 'ChannelAvatar';

export default themeable()(ChannelAvatar);
