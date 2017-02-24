import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import styles from '../style/profile-cards';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

function getStyle(themeColor, avatar, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = { ...styles.profileCard, backgroundColor: color };

  if (avatar) {
    return combineStyles(combineStyles(style, styles.avatar), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

/** Card containing the user's profile data */
class ProfileCard extends Component {
  static displayName = 'ProfileCard'

  static propTypes = {
    /** Path to the user's profile image */
    avatar: PropTypes.string,
    /** The user's username */
    username: PropTypes.node.isRequired,
    /** The user's info */
    text: PropTypes.node,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the root element */
    usernameStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the root element */
    textStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    avatar: '',
    style: {},
    usernameStyle: {},
    textStyle: {},
    text: null
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const { username, avatar, text, style, usernameStyle, textStyle } = this.props;
    const { color } = this.context;

    const avatarStyle = {
      float: 'left',
      width: '80px',
      height: '80px',
      border: `3px solid ${colors.white}`,
      marginRight: '15px'
    };

    return (
      <section style={getStyle(color, avatar, style)}>
        {avatar ? <Avatar image={avatar} style={avatarStyle} /> : null}
        <h1 style={combineStyles(styles.username, usernameStyle)}>{username}</h1>
        {text ? <p style={combineStyles(styles.text, textStyle)}>{text}</p> : null}
      </section>
    );
  }
}

export default Radium(ProfileCard);
