import React, { PropTypes } from 'react';
import {
  View,
  Text
} from 'react-native';
import pure from 'recompose/pure';
import styles from '../style/channel-header';
import combineStyles from '../internal/combine-styles';

/** A channel's header */
function ChannelHeader({
  name, rightButton, leftButton, style, leftButtonStyle, textStyle, rightButtonStyle
}) {
  return (
    <View style={combineStyles(styles.header, style)}>
      {
        leftButton
        ? <View style={combineStyles(styles.buttonLeft, leftButtonStyle)}>{leftButton}</View>
        : null
      }
      <Text style={combineStyles(styles.text, textStyle)}>{name}</Text>
      {
        rightButton
        ? <View style={combineStyles(styles.buttonRight, rightButtonStyle)}>{rightButton}</View>
        : null
      }
    </View>
  );
}

ChannelHeader.displayName = 'ChannelHeader';

ChannelHeader.propTypes = {
  /** The channel's name */
  name: PropTypes.node.isRequired,
  /** Right-hand side placed button */
  rightButton: PropTypes.node,
  /** Left-hand side placed button */
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

export default pure(ChannelHeader);
