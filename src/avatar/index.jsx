import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import getStyles from './get-styles';

/** An user's profile image */
const Avatar = ({ image, fallbackImage, style, status, statusStyle, ...custom }) => (
  <section style={getStyles.root(image, fallbackImage, style)} {...custom}>
    {status ? <div style={getStyles.status(status, statusStyle)} /> : null}
  </section>
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  /** Path to user's profile image */
  image: PropTypes.string.isRequired,
  /** Path to fallback image */
  fallbackImage: PropTypes.string,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** An user's status. One of the following: ["online", "away", "offline"] */
  status: PropTypes.oneOf(['online', 'away', 'offline', '']),
  /** Override the styles of the status indicator */
  statusStyle: PropTypes.instanceOf(Object)
};

Avatar.defaultProps = {
  style: {},
  status: '',
  statusStyle: {},
  fallbackImage: null
};

export default pure(Radium(Avatar));
