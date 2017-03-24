import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import Button from '../button';
import IconClose from '../icons/icon-close';
import styles from './styles';
import colors from '../settings/colors';
import getStyles from './get-styles';

/** Profile usefull for showing a users info */
class Profile extends Component {
  static displayName = 'Profile'

  static propTypes = {
    /** The user's username */
    headerText: PropTypes.node.isRequired,
    /** Secondary text line */
    secondaryText: PropTypes.node,
    /** Path to the user's profile image will only be rendered if there is one */
    avatar: PropTypes.string,
    /** Path to the user's coverimage will only be rendered if there is one */
    coverImage: PropTypes.string,
    /** Function for closing the profile */
    closeProfile: PropTypes.func.isRequired,
    /** Profile action button */
    editButton: PropTypes.node,
    /** Profile content */
    children: PropTypes.node,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headerStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the secondaryText element */
    secondaryStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the avatar element */
    avatarStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    avatar: '',
    coverImage: '',
    children: null,
    editButton: null,
    secondaryText: '',
    style: {},
    headerStyle: {},
    secondaryStyle: {},
    avatarStyle: {}
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const {
      headerText,
      secondaryText,
      avatar,
      coverImage,
      children,
      closeProfile,
      editButton,
      style,
      headerStyle,
      secondaryStyle,
      avatarStyle,
      ...custom
    } = this.props;

    const coverBackground = {
      backgroundImage: `url(${coverImage})`
    };

    return (
      <section style={getStyles.root(style)} {...custom}>
        <section style={styles.cover}>
          <section style={getStyles.coverImage(coverBackground)} />
          <section style={styles.coverOverlay} />
          {avatar ? <Avatar image={avatar} style={getStyles.avatar(avatarStyle)} /> : null}
          <Button style={styles.close} onClick={closeProfile} iconButton>
            <IconClose color={colors.white} />
          </Button>
        </section>
        <h1 style={getStyles.headerText(headerStyle)}>{headerText}</h1>
        {
          secondaryText
          ? <p style={getStyles.secondaryText(secondaryStyle)}>{secondaryText}</p>
          : null
        }
        {editButton}
        {children}
      </section>
    );
  }
}

export default Radium(Profile);
