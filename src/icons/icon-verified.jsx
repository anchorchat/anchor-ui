import React from 'react';
import PropTypes from 'prop-types';
import colors from '../settings/colors';

const IconVerified = ({ color, ...custom }) => (
  <svg height="24" viewBox="0 0 24 24" width="24" {...custom}>
    <path d="m20.6289819 10.948782c.4946908.6183635.4946908 1.4953154 0 2.113679l-1.2142411 1.5065584c-.1911306.2473454-.3372892.5396627-.3710181.8769519l-.2136165 1.9113054c-.0899438.7870081-.7083073 1.4053717-1.4953154 1.4953154l-1.9113055.2136165c-.3260462.0337289-.6183635.1574016-.8657089.3485322l-1.5065584 1.2142411c-.6183635.4946908-1.4953154.4946908-2.113679 0l-1.50655836-1.2142411c-.24734542-.1911306-.53966271-.3372892-.87695191-.3710181l-1.91130544-.2136165c-.78700811-.0899438-1.40537165-.7083073-1.49531542-1.4953154l-.21361649-1.9113055c-.03372892-.3260462-.15740162-.6183635-.34853217-.8657089l-1.2142411-1.5065584c-.49469081-.6183635-.49469081-1.4953154 0-2.113679l1.2142411-1.50655836c.19113055-.24734542.3372892-.53966271.37101812-.87695191l.21361649-1.91130544c.08994378-.78700811.70830731-1.40537165 1.49531542-1.49531542l1.91130545-.21361649c.3260462-.03372892.61836351-.15740162.86570891-.34853217l1.5065584-1.2142411c.6183635-.49469081 1.4953154-.49469081 2.113679 0l1.5065584 1.2142411c.2473454.19113055.5396627.3372892.8769519.37101812l1.9113054.21361649c.7870081.08994378 1.4053717.70830731 1.4953154 1.49531542l.2136165 1.91130545c.0337289.3260462.1574016.61836351.3485322.86570891zm-4.2838917-2.21720316c-.3190471-.31904715-.8363248-.31904715-1.1553719 0l-5.19917386 5.19917386-1.37325904-1.3732591c-.31904716-.3190471-.8363248-.3190471-1.15537196 0-.31904715.3190472-.31904715.8363248 0 1.155372l2.05722647 2.0572265c.26034953.2603495.68245949.2603495.94280909 0l5.8831412-5.8831413c.3190472-.31904716.3190472-.8363248 0-1.15537196z" fill={color} /> {/* eslint-disable-line max-len, react/jsx-one-expression-per-line */}
  </svg>
);

IconVerified.propTypes = {
  color: PropTypes.string
};

IconVerified.defaultProps = {
  color: colors.icons
};

IconVerified.displayName = 'IconVerified';

export default IconVerified;
