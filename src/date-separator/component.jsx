import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const propTypes = {
  /** Separator text */
  text: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the text element */
  textStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  style: {},
  textStyle: {}
};

const displayName = 'DateSeparator';

/** A separator to show above a Message */
const DateSeparator = ({
  text, style, textStyle,
}) => (
  <section style={getStyles.root(style)}>
    <p style={getStyles.text(textStyle)}>{text}</p>
  </section>
);

DateSeparator.propTypes = propTypes;
DateSeparator.defaultProps = defaultProps;
DateSeparator.displayName = displayName;

export default DateSeparator;
