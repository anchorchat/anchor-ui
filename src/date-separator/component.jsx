import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const propTypes = {
  /** The date to display */
  date: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the text element */
  textStyle: PropTypes.instanceOf(Object)
};

const defaultProps = {
  style: {},
  textStyle: {}
};

const displayName = 'DateSeparator';

/** A separator to show above a Message */
const DateSeparator = ({
  date, style, textStyle,
}) => (
  <section style={getStyles.root(style)}>
    <p style={getStyles.text(textStyle)}>{date}</p>
  </section>
);

DateSeparator.propTypes = propTypes;
DateSeparator.defaultProps = defaultProps;
DateSeparator.displayName = displayName;

export default DateSeparator;
