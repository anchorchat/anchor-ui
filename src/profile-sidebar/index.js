import React, { Component, PropTypes } from 'react';
import {
  View,
  Text
} from 'react-native';
import Uranium from 'uranium';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import styles from '../style/profile-sidebar';
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
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headerStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    children: null,
    style: {},
    headerStyle: {}
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const { username, avatar, children, style, headerStyle } = this.props;

    const avatarStyle = {
      width: '120px',
      height: '120px',
    };

    return (
      <View style={combineStyles(style, styles.profileSidebar)}>
        <Text style={combineStyles(headerStyle, styles.profileSidebarHeader)}>{username}</Text>
        {avatar ? <Avatar image={avatar} style={avatarStyle} /> : null}
        {children}
      </View>
    );
  }
}

export default Uranium(ProfileSidebar);
