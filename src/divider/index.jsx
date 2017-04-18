import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

/** Dividers group and separate content within lists and page layouts. */
function Divider({ text, style, ...custom }) {
  if (!text) {
    return <hr style={combineStyles(styles.hr, style)} {...custom} />;
  }

  return <h1 style={combineStyles(styles.text, style)} {...custom}>{text}</h1>;
}

Divider.propTypes = {
  /** Optional divider text */
  text: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

Divider.defaultProps = {
  text: null,
  style: {},
  textStyle: {}
};

Divider.displayName = 'Divider';

export default pure(Radium(Divider));
