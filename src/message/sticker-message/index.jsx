import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import combineStyles from '../../internal/combine-styles';

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
  const headerStyle = combineStyles(messageHeaderStyle, { marginBottom: 0 });

  return (
    <div>
      <img style={getStyles.body(myMessage, avatar, compact, messageBodyStyle)} src={message.body} alt="sticker" />
      <div style={getStyles.header(color, myMessage, avatar, compact, style)}>
        <MessageHeader
          avatar={avatar}
          compact={compact}
          myMessage={myMessage}
          fontSize={fontSize}
          headerStyle={headerStyle}
          username={message.username}
          stickerMessage
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
  color: colors.theme
};

export default StickerMessage;
