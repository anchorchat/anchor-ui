import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from '../style/channel-header';
import combineStyles from '../internal/combine-styles';

/**
 * Channel header styling
 */
function ChannelHeader({
  name, rightButton, leftButton, style, leftButtonStyle, textStyle, rightButtonStyle
}) {
  return (
    <header style={combineStyles(styles.header, style)}>
      {
        leftButton
        ? <div style={combineStyles(styles.buttonLeft, leftButtonStyle)}>{leftButton}</div>
        : null
      }
      <h1 style={combineStyles(styles.text, textStyle)}>{name}</h1>
      {
        rightButton
        ? <div style={combineStyles(styles.buttonRight, rightButtonStyle)}>{rightButton}</div>
        : null
      }
    </header>
  );
}

ChannelHeader.displayName = 'ChannelHeader';

ChannelHeader.propTypes = {
  /**
   * Content of the header
   */
  name: PropTypes.node.isRequired,
  /**
   * Right-hand side placed button
   */
  rightButton: PropTypes.node,
  /**
   * Left-hand side placed button
   */
  leftButton: PropTypes.node,
  /**
   * Override the styles of the root element
   */
  style: PropTypes.instanceOf(Object),
  /**
   * Override the styles of the text element
   */
  textStyle: PropTypes.instanceOf(Object),
  /**
   * Override the styles of the leftButton element
   */
  leftButtonStyle: PropTypes.instanceOf(Object),
  /**
   * Override the styles of the rightButton element
   */
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
