import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import Radium from 'radium';
import styles from '../style/divider';
import combineStyles from '../internal/combine-styles';

function Divider({ text, style, textStyle }) {
  if (!text) {
    return <hr style={combineStyles(styles.hr, style)} />;
  }

  return <h1 style={combineStyles(styles.text, textStyle)}>{text}</h1>;
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

export default pure(Radium(Divider));
