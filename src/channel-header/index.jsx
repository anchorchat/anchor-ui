import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

/** A channel's header */
function ChannelHeader({
  name, rightButton, leftButton, style, leftButtonStyle, textStyle, rightButtonStyle, ...custom
}) {
  return (
    <header style={getStyles.root(style)} {...custom}>
      {
        leftButton
        ? <div style={getStyles.leftButton(leftButtonStyle)}>{leftButton}</div>
        : null
      }
      <h1 style={getStyles.text(textStyle)}>{name}</h1>
      {
        rightButton
        ? <div style={getStyles.rightButton(rightButtonStyle)}>{rightButton}</div>
        : null
      }
    </header>
  );
}

ChannelHeader.displayName = 'ChannelHeader';

ChannelHeader.propTypes = {
  /** The channel's name */
  name: PropTypes.node.isRequired,
  /** Button on the right side of the ChannelHeader */
  rightButton: PropTypes.node,
  /** Button on the left side of the ChannelHeader */
  leftButton: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the text element */
  textStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the leftButton element */
  leftButtonStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the rightButton element */
  rightButtonStyle: PropTypes.instanceOf(Object)
};

ChannelHeader.defaultProps = {
  style: {},
  textStyle: {},
  rightButtonStyle: {},
  leftButtonStyle: {},
  rightButton: null,
  leftButton: null
};

export default pure(Radium(ChannelHeader));
