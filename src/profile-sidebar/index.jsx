import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import styles from '../style/profile-sidebar';
import { colors } from '../settings';
import combineStyles from '../internal/combine-styles';

/** ProfileSidebar usefull for showing a users info */
class ProfileSidebar extends Component {
  static displayName = 'ProfileSidebar'

  static propTypes = {
    /** The user's username */
    username: PropTypes.node.isRequired,
    /** Path to the user's profile image will only be rendered if there is one */
    avatar: PropTypes.string.isRequired,
    /** MessageList content */
    children: PropTypes.node,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    children: null,
    style: {}
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const { username, avatar, children, style } = this.props;

    const avatarStyle = {
      width: '80px',
      height: '80px',
      border: `3px solid ${colors.white}`
    };

    return (
      <section style={combineStyles(style, styles.profileSidebar)}>
        <h1>{username}</h1>
        {avatar ? <Avatar image={avatar} style={avatarStyle} /> : null}
        {children}
      </section>
    );
  }
}

export default Radium(ProfileSidebar);
