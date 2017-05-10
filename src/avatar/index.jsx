import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import getStyles from './get-styles';

/** An user's profile image */
function Avatar({ image, style, status, statusStyle, ...custom }) {
  return (
    <section style={getStyles.root(image, style)} {...custom}>
      {status ? <div style={getStyles.status(status, statusStyle)} /> : null}
    </section>
  );
}

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  /** Path to user's profile image */
  image: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** A user's status. One of the following: ["online", "away", "offline"] */
  status: PropTypes.oneOf(['online', 'away', 'offline', '']),
  /** Override the styles of the status indicator */
  statusStyle: PropTypes.instanceOf(Object)
};

Avatar.defaultProps = {
  style: {},
  status: '',
  statusStyle: {}
};

export default pure(Radium(Avatar));
