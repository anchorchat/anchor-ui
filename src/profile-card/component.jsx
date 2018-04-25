import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import styles from './styles';
import combineStyles from '../internal/combine-styles';
import getStyles from './get-styles';

const displayName = 'ProfileCard';

const propTypes = {
  /** Path to the user's avatar */
  avatar: PropTypes.string,
  /** The user's username */
  username: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the username element */
  usernameStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.string.isRequired
};

const defaultProps = {
  avatar: '',
  style: {},
  usernameStyle: {},
};

/** Card containing a user's profile data */
const ProfileCard = ({
  username,
  avatar,
  style,
  usernameStyle,
  color,
  ...custom
}) => (
  <section style={getStyles.root(color, avatar, style)} {...custom}>
    {avatar ? <Avatar image={avatar} style={getStyles.avatar()} /> : null}
    <h1 style={combineStyles(styles.username, usernameStyle)}>{username}</h1>
  </section>
);

ProfileCard.displayName = displayName;
ProfileCard.propTypes = propTypes;
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
