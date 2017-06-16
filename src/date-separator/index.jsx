import React from 'react';
import PropTypes from 'prop-types';
import formatDate from 'date-fns/format';
import getStyles from './get-styles';

const propTypes = {
  /** The date to display */
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  /** The format of displaying date */
  format: PropTypes.string,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the text element */
  textStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the hr element */
  hrStyle: PropTypes.instanceOf(Object),
};

const defaultProps = {
  format: 'DD MMM',
  style: {},
  textStyle: {},
  hrStyle: {}
};

const displayName = 'DateSeparator';

/** A separator to show above a Message */
const DateSeparator = ({ date, format, style, textStyle, hrStyle }) => (
  <section style={getStyles.root(style)}>
    <hr style={getStyles.hr(hrStyle)} />
    <p style={getStyles.text(textStyle)}>{formatDate(date, format)}</p>
    <hr style={getStyles.hr(hrStyle)} />
  </section>
);

DateSeparator.propTypes = propTypes;
DateSeparator.defaultProps = defaultProps;
DateSeparator.displayName = displayName;

export default DateSeparator;
