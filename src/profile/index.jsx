import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Avatar from '../avatar';
import styles from './styles';
import getStyles from './get-styles';

const displayName = 'Profile';

const propTypes = {
  /** The user's username */
  header: PropTypes.node.isRequired,
  /** Secondary text line */
  secondaryText: PropTypes.node,
  /** Path to the user's profile image will only be rendered if there is one */
  avatar: PropTypes.string,
  /** Path to the user's coverimage will only be rendered if there is one */
  coverImage: PropTypes.string,
  /** Profile action button */
  button: PropTypes.node,
  /** Profile content */
  children: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the cover element */
  coverStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the coverImage element */
  coverImageStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the secondaryText element */
  secondaryTextStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the avatar element */
  avatarStyle: PropTypes.instanceOf(Object),
  /** An user's status. One of the following: ["online", "away", "offline"] */
  status: PropTypes.oneOf(['online', 'away', 'offline', '']),
};

const defaultProps = {
  avatar: '',
  coverImage: '',
  children: null,
  button: null,
  secondaryText: '',
  style: {},
  coverStyle: {},
  coverImageStyle: {},
  headerStyle: {},
  secondaryTextStyle: {},
  avatarStyle: {},
  status: ''
};

/** Profile useful for showing a user's info */
const Profile = ({
  header,
  secondaryText,
  avatar,
  coverImage,
  children,
  button,
  style,
  coverStyle,
  coverImageStyle,
  headerStyle,
  secondaryTextStyle,
  avatarStyle,
  status,
  ...custom
}) => {
  const coverBackground = {
    backgroundImage: `url(${coverImage})`
  };

  return (
    <section style={getStyles.root(style)} {...custom}>
      <section style={getStyles.cover(coverStyle)}>
        <section style={getStyles.coverImage(coverBackground, coverImageStyle)} />
      </section>
      {
        avatar
        ? <Avatar
          image={avatar}
          style={getStyles.avatar(avatarStyle)}
          statusStyle={styles.status}
          status={status}
        />
        : null
      }
      <h1 style={getStyles.header(headerStyle)}>{header}</h1>
      {
        secondaryText
        ? <p style={getStyles.secondaryText(secondaryTextStyle)}>{secondaryText}</p>
        : null
      }
      {button}
      {children}
    </section>
  );
};

Profile.displayName = displayName;
Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Radium(Profile);
