import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import Loader from '../../loader';
import styles from './styles';

function TypingMessage({
  color,
  myMessage,
  avatar,
  compact,
  style,
  fontSize,
  messageHeaderStyle,
  message,
  messageBodyStyle,
  badge
}) {
  return (
    <div style={getStyles.root(color, myMessage, avatar, compact, style)}>
      <MessageHeader
        avatar={avatar}
        compact={compact}
        myMessage={myMessage}
        fontSize={fontSize}
        headerStyle={messageHeaderStyle}
        username={message.username}
        badge={badge}
      />
      <div className={fontSize} style={getStyles.body(myMessage, fontSize, messageBodyStyle)}>
        <Loader dotStyle={styles.loaderDot} />
      </div>
    </div>
  );
}

TypingMessage.propTypes = {
  avatar: PropTypes.string,
  message: PropTypes.shape({
    body: PropTypes.node.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    username: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'image', 'sticker', 'typing'])
  }).isRequired,
  style: PropTypes.instanceOf(Object),
  messageHeaderStyle: PropTypes.instanceOf(Object),
  messageBodyStyle: PropTypes.instanceOf(Object),
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  myMessage: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  badge: PropTypes.node
};

TypingMessage.defaultProps = {
  avatar: '',
  style: {},
  timeFormat: 'HH:mm',
  messageHeaderStyle: {},
  messageBodyStyle: {},
  fontSize: 'small',
  myMessage: false,
  compact: false,
  enableLightbox: false,
  color: colors.theme,
  iconMenu: null,
  badge: null
};

export default TypingMessage;
