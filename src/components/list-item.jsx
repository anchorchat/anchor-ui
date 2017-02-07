import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import shallowEqual from 'recompose/shallowEqual';
import listStyleSheet from '../style/lists';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';
import Avatar from './avatar';

/**
 * ListItem styling
 */
class ListItem extends Component {
  static propTypes = {
    /**
     * The list item's primary text
     */
    primaryText: PropTypes.node.isRequired,
    /**
     * The list item's secondary text
     */
    secondaryText: PropTypes.node,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        listItem: PropTypes.string.isRequired,
        primaryText: PropTypes.string.isRequired,
        secondaryText: PropTypes.string.isRequired,
        rightButton: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        leftAvatar: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
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

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, primaryTextStyle, secondaryTextStyle } = props;

    const className = getClassNames(classes, style, 'listItem', 'ListItem');
    const primaryTextClassName = getClassNames(classes, primaryTextStyle, 'primaryText', 'ListItem');
    const secondaryTextClassName = getClassNames(
      classes, secondaryTextStyle, 'secondaryText', 'ListItem'
    );

    this.state = {
      className,
      primaryTextClassName,
      secondaryTextClassName
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const {
      primaryText, secondaryText, onClick, active, rightButton, sheet: { classes }, avatar, badge
    } = this.props;
    const { className, primaryTextClassName, secondaryTextClassName } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    return (
      <li
        onClick={onClick}
        style={active ? { backgroundColor } : {}}
        className={
          classNames(
            className,
            {
              [classes.active]: active,
              [classes.rightButton]: rightButton,
              [classes.leftAvatar]: avatar
            }
          )
        }
      >
        {
          avatar
          ? <div className={classes.avatar}>
            {badge ? <div className={classes.badge}>{badge}</div> : null}
            <Avatar image={avatar} />
          </div>
          : null
        }
        <h1 className={primaryTextClassName}>{primaryText}</h1>
        {secondaryText ? <h2 className={secondaryTextClassName}>{secondaryText}</h2> : null}
        {rightButton ? <div className={classes.button}>{rightButton}</div> : null}
      </li>
    );
  }
}

export default injectSheet(listStyleSheet)(ListItem);
