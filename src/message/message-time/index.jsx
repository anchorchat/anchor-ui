import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import getStyles from '../get-styles';

function MessageTime({ myMessage, type, style, createdAt, timeFormat }) {
  return (
    <span style={getStyles.time(myMessage, type, style)}>
      {format(createdAt, timeFormat)}
    </span>
  );
}

MessageTime.propTypes = {
  myMessage: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  timeFormat: PropTypes.string,
  createdAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired
};

MessageTime.defaultProps = {
  myMessage: false,
  type: 'text',
  style: {},
  timeFormat: 'HH:mm'
};

export default MessageTime;
