import React, { PropTypes } from 'react';
import {
  View,
  Text
} from 'react-native';
import pure from 'recompose/pure';
import styles from '../style/divider';
import combineStyles from '../internal/combine-styles';

function Divider({ text, style, textStyle }) {
  if (!text) {
    return <View style={combineStyles(styles.hr, style)} />;
  }

  return <Text style={combineStyles(styles.text, textStyle)}>{text}</Text>;
}

Divider.propTypes = {
  /** Optional divider text */
  text: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the text element */
  textStyle: PropTypes.instanceOf(Object)
};

Divider.defaultProps = {
  text: null,
  style: {},
  /** Override the styles of the text element */
  textStyle: {}
};

Divider.displayName = 'Divider';

export default pure(Divider);
