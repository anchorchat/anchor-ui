import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import getStyles from './get-styles';

/** Dividers group and separate content within lists and page layouts. */
const Divider = ({ text, style, ...custom }) => {
  if (!text) {
    return <hr style={getStyles.hr(style)} {...custom} />;
  }

  return <h1 style={getStyles.text(style)} {...custom}>{text}</h1>;
};

Divider.propTypes = {
  /** Optional divider text */
  text: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object)
};

Divider.defaultProps = {
  text: null,
  style: {}
};

Divider.displayName = 'Divider';

export default pure(Radium(Divider));
