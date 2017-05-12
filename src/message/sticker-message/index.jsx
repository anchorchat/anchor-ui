import React from 'react';
import PropTypes from 'prop-types';
import getStyles from '../get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import styles from '../styles';

function StickerMessage({
  color,
  myMessage,
  avatar,
  compact,
  style,
  fontSize,
  messageHeaderStyle,
  message,
  messageBodyStyle,
  messageTimeStyle,
  timeFormat
}) {
  return (
    <div>
      <img style={styles.messageSticker} src={message.body} alt="sticker" />
      <div style={getStyles.root(color, myMessage, avatar, compact, style)}>
        <MessageHeader
          avatar={avatar}
          compact={compact}
          myMessage={myMessage}
          fontSize={fontSize}
          headerStyle={messageHeaderStyle}
          username={message.username}
        />
        <MessageTime
          myMessage={myMessage}
          type={message.type}
          style={messageTimeStyle}
          createdAt={message.createdAt}
          timeFormat={timeFormat}
        />
      </div>
    </div>
  );
}

StickerMessage.propTypes = {
  avatar: PropTypes.string,
  message: PropTypes.shape({
    body: PropTypes.node.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    username: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'image', 'sticker'])
  }).isRequired,
  timeFormat: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  messageHeaderStyle: PropTypes.instanceOf(Object),
  messageBodyStyle: PropTypes.instanceOf(Object),
  messageTimeStyle: PropTypes.instanceOf(Object),
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  myMessage: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string
};

StickerMessage.defaultProps = {
  avatar: '',
  style: {},
  timeFormat: 'HH:mm',
  messageHeaderStyle: {},
  messageBodyStyle: {},
  messageTimeStyle: {},
  fontSize: 'small',
  myMessage: false,
  emoji: false,
  enableLinks: false,
  compact: false,
  enableLightbox: false,
  color: ''
};

export default StickerMessage;
