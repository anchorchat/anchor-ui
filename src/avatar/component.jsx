import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const displayName = 'Avatar';

const propTypes = {
  /** Path to user's profile image */
  image: PropTypes.string.isRequired,
  /** Path to default image. This image will be shown if the image path doesn't resolve */
  defaultImage: PropTypes.string,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** An user's status. One of the following: ["online", "away", "offline"] */
  status: PropTypes.oneOf(['online', 'away', 'offline', '']),
  /** Override the styles of the status indicator */
  statusStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  style: {},
  status: '',
  statusStyle: {},
  defaultImage: null
};

/** A user's profile image */
const Avatar = ({
  image, defaultImage, style, status, statusStyle, ...custom
}) => (
  <section style={getStyles.root(image, defaultImage, style)} {...custom}>
    {status ? <div style={getStyles.status(status, statusStyle)} /> : null}
  </section>
);

Avatar.displayName = displayName;
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
