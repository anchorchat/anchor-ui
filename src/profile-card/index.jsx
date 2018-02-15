import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import Avatar from '../avatar';
import styles from './styles';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import getStyles from './get-styles';
import themeable from '../themeable';

/** Card containing the user's profile data */
const ProfileCard = ({
  username,
  avatar,
  style,
  usernameStyle,
  color,
  ...custom
}) => {
  const avatarStyle = {
    float: 'left',
    width: '80px',
    height: '80px',
    border: `3px solid ${colors.white}`,
    marginRight: '15px'
  };

  return (
    <section style={getStyles.root(color, avatar, style)} {...custom}>
      {avatar ? <Avatar image={avatar} style={avatarStyle} /> : null}
      <h1 style={combineStyles(styles.username, usernameStyle)}>{username}</h1>
    </section>
  );
};

ProfileCard.displayName = 'ProfileCard';

ProfileCard.propTypes = {
  /** Path to the user's profile image */
  avatar: PropTypes.string,
  /** The user's username */
  username: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the username element */
  usernameStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.string.isRequired
};

ProfileCard.defaultProps = {
  avatar: '',
  style: {},
  usernameStyle: {},
};

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(ProfileCard);
