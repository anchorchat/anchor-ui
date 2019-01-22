import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import styles from './styles';

/** A channel's header */
const ChannelHeader = ({
  name,
  rightButton,
  leftButton,
  style,
  leftButtonStyle,
  textStyle,
  rightButtonStyle,
  secondaryText,
  secondaryTextStyle,
  color,
  ...custom
}) => (
  <header style={getStyles.root(style)} {...custom}>
    {
      leftButton
        ? <div style={getStyles.leftButton(leftButtonStyle)}>{leftButton}</div>
        : null
    }
    <section style={styles.textContainer}>
      <h1 style={getStyles.text(textStyle)}>{name}</h1>
      {
        secondaryText
          ? <h2 style={getStyles.secondaryText(color, secondaryTextStyle)}>{secondaryText}</h2>
          : null
      }
    </section>
    {
      rightButton
        ? <div style={getStyles.rightButton(rightButtonStyle)}>{rightButton}</div>
        : null
    }
  </header>
);

ChannelHeader.displayName = 'ChannelHeader';

ChannelHeader.propTypes = {
  /** The channel's name */
  name: PropTypes.node.isRequired,
  /** Optional text to display below `name` */
  secondaryText: PropTypes.node,
  /** Button on the right side of the ChannelHeader */
  rightButton: PropTypes.node,
  /** Button on the left side of the ChannelHeader */
  leftButton: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the text element */
  textStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the text element */
  secondaryTextStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the leftButton element */
  leftButtonStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the rightButton element */
  rightButtonStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  color: PropTypes.string.isRequired
};

ChannelHeader.defaultProps = {
  style: {},
  textStyle: {},
  secondaryTextStyle: {},
  rightButtonStyle: {},
  leftButtonStyle: {},
  rightButton: null,
  leftButton: null,
  secondaryText: null
};

export default ChannelHeader;
