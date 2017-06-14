import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import getStyles from './get-styles';
import styles from './styles';

const MessageTime = ({ myMessage, type, style, createdAt, timeFormat, edited }) => (
  <span style={getStyles.root(myMessage, type, edited, style)}>
    {edited ? <span style={styles.edited}>{edited}</span> : null}
    <span>{format(createdAt, timeFormat)}</span>
  </span>
);

MessageTime.propTypes = {
  myMessage: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  timeFormat: PropTypes.string,
  createdAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  edited: PropTypes.node
};

MessageTime.defaultProps = {
  myMessage: false,
  type: 'text',
  style: {},
  timeFormat: 'HH:mm',
  edited: null
};

export default MessageTime;
