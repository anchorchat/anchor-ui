import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import Avatar from '../avatar';
import Button from '../button';
import IconClose from '../icons/icon-close';
import styles from './styles';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

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
    headerStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    avatar: '',
    coverImage: '',
    children: null,
    editButton: null,
    secondaryText: '',
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
      ...custom
    } = this.props;

    const coverBackground = {
      backgroundImage: `url(${coverImage})`
    };

    return (
      <section style={combineStyles(style, styles.profile)} {...custom}>
        <section style={styles.cover}>
          <section style={combineStyles(coverBackground, styles.coverImage)} />
          <section style={styles.coverOverlay} />
          {avatar ? <Avatar image={avatar} style={styles.avatar} /> : null}
          <Button style={styles.close} onClick={closeProfile} iconButton>
            <IconClose color={colors.white} />
          </Button>
        </section>
        <h1 style={combineStyles(headerStyle, styles.profileHeader)}>{headerText}</h1>
        {secondaryText ? <p style={styles.secondaryText}>{secondaryText}</p> : null}
        {editButton}
        {children}
      </section>
    );
  }
}

export default Radium(Profile);
