import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import styles from '../style/lists';
import { colors } from '../settings';
import Avatar from '../avatar';
import combineStyles from '../internal/combine-styles';
import darken from '../internal/darken';

function getStyle(themeColor, active, rightButton, avatar, overrideStyle) {
  let style = styles.listItem;

  const color = themeColor || colors.theme;

  const activeStyle = {
    ...styles.listItem,
    backgroundColor: color,
    ':hover': { backgroundColor: darken(themeColor, 0.05) },
    ':active': { backgroundColor: darken(themeColor, 0.15) }
  };

  if (active) {
    style = combineStyles(style, activeStyle);
  }

  if (rightButton) {
    style = combineStyles(style, styles.rightButton);
  }

  if (avatar) {
    style = combineStyles(style, styles.leftAvatar);
  }

  return combineStyles(style, overrideStyle);
}

function getTextStyle(textStyle, active, overrideStyle) {
  let style = textStyle;

  if (active) {
    style = { ...style, color: colors.white };
  }

  return combineStyles(style, overrideStyle);
}

/**
 * A list's item
 */
class ListItem extends Component {
  static displayName = 'ListItem'

  static propTypes = {
    /**
     * The list item's primary text
     */
    primaryText: PropTypes.node.isRequired,
    /**
     * The list item's secondary text
     */
    secondaryText: PropTypes.node,
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the primaryText element
     */
    primaryTextStyle: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the secondaryText element
     */
    secondaryTextStyle: PropTypes.instanceOf(Object),
    /**
     * Click function for the root element
     */
    onClick: PropTypes.func,
    /**
     * Add active styles to ListItem
     */
    active: PropTypes.bool,
    /**
     * Right-hand side placed button
     */
    rightButton: PropTypes.node,
    /**
     * Avatar object referenced by the list item
     */
    avatar: PropTypes.string,
    /**
     * Badge object referenced by the list item
     */
    badge: PropTypes.node
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
    badge: null
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
      secondaryTextStyle
    } = this.props;
    const { color } = this.context;

    return (
      <li key="listItem" onClick={onClick} style={getStyle(color, active, rightButton, avatar, style)}>
        {
          avatar
          ? <div style={styles.avatar}>
            {badge ? <div style={styles.badge}>{badge}</div> : null}
            <Avatar image={avatar} />
          </div>
          : null
        }
        <h1 style={getTextStyle(styles.primaryText, active, primaryTextStyle)}>{primaryText}</h1>
        {
          secondaryText
          ? <h2 style={getTextStyle(styles.secondaryText, active, secondaryTextStyle)}>
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
