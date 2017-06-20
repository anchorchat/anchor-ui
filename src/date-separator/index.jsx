import React from 'react';
import PropTypes from 'prop-types';
import formatDate from 'date-fns/format';
import en from 'date-fns/locale/en';
import getStyles from './get-styles';

const propTypes = {
  /** The date to display */
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  /**
   * The format of displaying date
   *
   * https://date-fns.org/docs/format
   */
  format: PropTypes.string,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the text element */
  textStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the hr element */
  hrStyle: PropTypes.instanceOf(Object),
  /**
   * Internationalization, defaults to English
   *
   * https://date-fns.org/docs/I18n
   */
  locale: PropTypes.instanceOf(Object)
};

const defaultProps = {
  format: 'DD MMM',
  style: {},
  textStyle: {},
  hrStyle: {},
  locale: en
};

const displayName = 'DateSeparator';

/** A separator to show above a Message */
const DateSeparator = ({ date, format, style, textStyle, hrStyle, locale }) => (
  <section style={getStyles.root(style)}>
    <hr style={getStyles.hr(hrStyle)} />
    <p style={getStyles.text(textStyle)}>{formatDate(date, format, { locale })}</p>
    <hr style={getStyles.hr(hrStyle)} />
  </section>
);

DateSeparator.propTypes = propTypes;
DateSeparator.defaultProps = defaultProps;
DateSeparator.displayName = displayName;

export default DateSeparator;
