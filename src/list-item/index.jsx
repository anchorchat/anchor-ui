import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import styles from './styles';
import colors from '../settings/colors';
import Avatar from '../avatar';
import IconMute from '../icons/icon-mute';
import IconBlock from '../icons/icon-block';
import getStyles from './get-styles';

/** A list's item */
class ListItem extends Component {
  static displayName = 'ListItem'

  static propTypes = {
    /** The list item's primary text */
    primaryText: PropTypes.node.isRequired,
    /** The list item's secondary text */
    secondaryText: PropTypes.node,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the primaryText element */
    primaryTextStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the secondaryText element */
    secondaryTextStyle: PropTypes.instanceOf(Object),
    /** Click function for the root element */
    onClick: PropTypes.func,
    /** Add active styles to ListItem */
    active: PropTypes.bool,
    /** Right-hand side placed button */
    rightButton: PropTypes.node,
    /** The item's avatar, if a string is supplied Avatar component is used */
    avatar: PropTypes.node,
    /** Badge object referenced by the list item */
    badge: PropTypes.node,
    /** Add muted styles to ListItem */
    muted: PropTypes.bool,
    /** Add blocked styles to ListItem */
    blocked: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    secondaryText: '',
    primaryTextStyle: {},
    secondaryTextStyle: {},
    onClick: null,
    active: false,
    rightButton: null,
    avatar: '',
    badge: null,
    muted: false,
    blocked: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext) ||
      Radium.getState(this.state, 'listItem', ':hover') !== Radium.getState(nextState, 'listItem', ':hover') ||
      Radium.getState(this.state, 'listItem', ':active') !== Radium.getState(nextState, 'listItem', ':active')
    );
  }

  render() {
    const {
      primaryText,
      secondaryText,
      onClick,
      active,
      rightButton,
      avatar,
      badge,
      style,
      primaryTextStyle,
      secondaryTextStyle,
      muted,
      blocked,
      ...custom
    } = this.props;
    const { color } = this.context;

    return (
      <li key="listItem" onClick={onClick} style={getStyles.root(color, active, rightButton, avatar, style)} {...custom}>
        {
          avatar
          ? <div style={styles.avatar}>
            {muted && !blocked ? <div style={styles.icon}><IconMute color={colors.white} /></div> : null}
            {blocked ? <div style={styles.icon}><IconBlock color={colors.white} /></div> : null}
            {badge ? <div style={styles.badge}>{badge}</div> : null}
            {typeof avatar === 'string' ? <Avatar image={avatar} /> : avatar}
          </div>
          : null
        }
        <h1 style={getStyles.text(styles.primaryText, active, primaryTextStyle)}>{primaryText}</h1>
        {
          secondaryText
          ? <h2 style={getStyles.text(styles.secondaryText, active, secondaryTextStyle)}>
            {secondaryText}
          </h2>
          : null
        }
        {rightButton ? <div style={styles.button}>{rightButton}</div> : null}
      </li>
    );
  }
}

export default Radium(ListItem);
