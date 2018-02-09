import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const propTypes = {
  /** Optional divider text */
  text: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  text: null,
  style: {}
};

const displayName = 'Divider';

/** Dividers group and separate content within lists and page layouts. */
const Divider = ({ text, style, ...custom }) => {
  if (!text) {
    return <hr style={getStyles.hr(style)} {...custom} />;
  }

  return <h1 style={getStyles.text(style)} {...custom}>{text}</h1>;
};

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;
Divider.displayName = displayName;

export default Divider;
