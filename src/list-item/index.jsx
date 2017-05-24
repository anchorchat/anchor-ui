import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import styles from './styles';
import colors from '../settings/colors';
import Avatar from '../avatar';
import IconMute from '../icons/icon-mute';
import IconBlock from '../icons/icon-block';
import IconChevronDown from '../icons/icon-chevron-down';
import getStyles from './get-styles';
import Button from '../button';
import List from '../list';
import themeable from '../themeable';

/** A list's item */
class ListItem extends Component {
  static displayName = 'ListItem'

  static propTypes = {
    /** The ListItem's primary text */
    primaryText: PropTypes.node.isRequired,
    /** The ListItem's secondary text */
    secondaryText: PropTypes.node,
    /** A badge to display before the secondaryText. */
    textBadge: PropTypes.node,
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
    /** The item's avatar, if a string is provided Avatar component is used */
    avatar: PropTypes.node,
    /** Add a badge to the ListItem */
    badge: PropTypes.node,
    /** Add muted styles to ListItem */
    muted: PropTypes.bool,
    /** Add blocked styles to ListItem */
    blocked: PropTypes.bool,
    /** ListItems to render in a NestedList,
    if rightButton is also provided only the NestedList will render */
    children: PropTypes.node,
    /** Control toggle state of nested list. */
    open: PropTypes.bool,
    /** Callback function fired when the ListItem toggles its nested list */
    onNestedListToggle: PropTypes.func,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    style: {},
    secondaryText: '',
    textBadge: null,
    primaryTextStyle: {},
    secondaryTextStyle: {},
    onClick: null,
    active: false,
    rightButton: null,
    avatar: '',
    badge: null,
    muted: false,
    blocked: false,
    children: null,
    open: null,
    onNestedListToggle: () => {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      open: false
    };

    this.toggleNestedList = this.toggleNestedList.bind(this);
  }

  componentWillMount() {
    if (this.props.open !== null) {
      this.setState({
        open: this.props.open
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== null) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  toggleNestedList() {
    const { onNestedListToggle } = this.props;

    this.setState({ open: !this.state.open });
    onNestedListToggle(!this.state.open);
  }

  render() {
    const {
      primaryText,
      secondaryText,
      textBadge,
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
      children,
      open, // eslint-disable-line no-unused-vars
      onNestedListToggle, // eslint-disable-line no-unused-vars
      color,
      ...custom
    } = this.props;

    let nestedList = null;

    if (children) {
      nestedList = (
        <List open={this.state.open}>
          {children}
        </List>
      );
    }

    return (
      <div style={styles.container}>
        <li key="listItem" onClick={onClick || this.toggleNestedList} style={getStyles.root(color, active, rightButton, avatar, style)} {...custom}>
          {
            avatar
            ? <div style={styles.avatar}>
              {
                muted && !blocked
                ? <div style={styles.icon}><IconMute color={colors.white} /></div>
                : null
              }
              {blocked ? <div style={styles.icon}><IconBlock color={colors.white} /></div> : null}
              {badge ? <div style={styles.badge}>{badge}</div> : null}
              {typeof avatar === 'string' ? <Avatar image={avatar} /> : avatar}
            </div>
            : null
          }
          <h1 style={getStyles.text(styles.primaryText, active, null, primaryTextStyle)}>
            {primaryText}
          </h1>
          {
            secondaryText || textBadge
            ? <h2
              style={getStyles.text(
                styles.secondaryText,
                active, textBadge,
                secondaryTextStyle
              )}
            >
              {textBadge} {secondaryText}
            </h2>
            : null
          }
          {rightButton && !nestedList ? <div style={styles.button}>{rightButton}</div> : null}
          {
            nestedList
            ? <div style={getStyles.nestedListButton(this.state.open)}>
              <Button iconButton onClick={this.toggleNestedList}>
                <IconChevronDown />
              </Button>
            </div>
            : null
          }
        </li>
        {nestedList}
      </div>
    );
  }
}

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(ListItem);
