import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import styles from './styles';

const propTypes = {
  myMessage: PropTypes.bool,
  type: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  createdAt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date)
  ]).isRequired,
  edited: PropTypes.node,
  collapsed: PropTypes.bool,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large'])
};

const defaultProps = {
  myMessage: false,
  type: 'text',
  style: {},
  edited: null,
  collapsed: false,
  fontSize: 'small'
};

const MessageTime = ({
  myMessage,
  type,
  style,
  createdAt,
  edited,
  collapsed,
  fontSize
}) => (
  <span style={getStyles.root(myMessage, type, collapsed, fontSize, style)}>
    {edited ? <span style={styles.edited}>{edited}</span> : null}
    <span>{createdAt}</span>
  </span>
);

MessageTime.propTypes = propTypes;
MessageTime.defaultProps = defaultProps;

export default MessageTime;
