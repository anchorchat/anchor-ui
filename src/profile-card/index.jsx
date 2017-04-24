import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import styles from './styles';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';
import getStyles from './get-styles';

/** Card containing the user's profile data */
class ProfileCard extends Component {
  static displayName = 'ProfileCard'

  static propTypes = {
    /** Path to the user's profile image */
    avatar: PropTypes.string,
    /** The user's username */
    username: PropTypes.node.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the username element */
    usernameStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    avatar: '',
    style: {},
    usernameStyle: {},
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
    const { username, avatar, style, usernameStyle, ...custom } = this.props;
    const { color } = this.context;

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
  }
}

export default Radium(ProfileCard);
