import React from 'react';
import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import styles from './styles';
import colors from '../settings/colors';
import Avatar from '../avatar';
import IconMute from '../icons/icon-mute';
import IconBlock from '../icons/icon-block';
import getStyles from './get-styles';

const displayName = 'ListItem';

const propTypes = {
  /** The ListItem's primary text */
  primaryText: PropTypes.node.isRequired,
  /** The ListItem's secondary text */
  secondaryText: PropTypes.node,
  /** A badge to display before the secondaryText. */
  textBadge: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the primaryText element */
  primaryTextStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the secondaryText element */
  secondaryTextStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Callback fired when the ListItem is clicked
   *
   * function(event: object) => void
   */
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
  color: PropTypes.string.isRequired
};

const defaultProps = {
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
  blocked: false
};

/** A list's item */
const ListItem = ({
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
  color,
  ...custom
}) => (
  <li
    onClick={onClick}
    style={getStyles.root(color, active, style)}
    {...custom}
  >
    {
      avatar
        ? (
          <div style={styles.avatar}>
            {isString(avatar) ? <Avatar image={avatar} /> : avatar}
            {
              muted && !blocked
                ? <div style={styles.icon}><IconMute color={colors.white} /></div>
                : null
            }
            {blocked ? <div style={styles.icon}><IconBlock color={colors.white} /></div> : null}
            {badge ? <div style={styles.badge}>{badge}</div> : null}
          </div>
        )
        : null
    }
    <div style={getStyles.textContainer(avatar, rightButton)}>
      <h1 style={getStyles.text(styles.primaryText, active, null, primaryTextStyle)}>
        {primaryText}
      </h1>
      {
        secondaryText || textBadge
          ? (
            <h2
              style={getStyles.text(
                styles.secondaryText,
                active, textBadge,
                secondaryTextStyle
              )}
            >
              {textBadge} {secondaryText}
            </h2>
          )
          : null
      }
    </div>
    {rightButton ? <div style={styles.button}>{rightButton}</div> : null}
  </li>
);

ListItem.displayName = displayName;
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
