import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

const StickerMessage = ({
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
  timeFormat,
  locale,
  badge,
  iconMenu
}) => {
  const headerStyle = combineStyles(messageHeaderStyle, { marginBottom: 0 });

  return (
    <div style={styles.container}>
      <div style={getStyles.header(color, myMessage, avatar, compact, iconMenu, style)}>
        <MessageHeader
          avatar={avatar}
          compact={compact}
          myMessage={myMessage}
          fontSize={fontSize}
          headerStyle={headerStyle}
          username={message.username}
          stickerMessage
          badge={badge}
        />
        <MessageTime
          myMessage={myMessage}
          type={message.type}
          style={messageTimeStyle}
          createdAt={message.createdAt}
          timeFormat={timeFormat}
          locale={locale}
          fontSize={fontSize}
        />
        {iconMenu ? <div style={styles.iconMenu}>{iconMenu}</div> : null}
      </div>
      <img style={getStyles.body(myMessage, avatar, compact, messageBodyStyle)} src={message.body} alt="sticker" />
    </div>
  );
};

StickerMessage.propTypes = {
  avatar: PropTypes.string,
  message: PropTypes.shape({
    body: PropTypes.node.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    username: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'typing'])
  }).isRequired,
  timeFormat: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  messageHeaderStyle: PropTypes.instanceOf(Object),
  messageBodyStyle: PropTypes.instanceOf(Object),
  messageTimeStyle: PropTypes.instanceOf(Object),
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  myMessage: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  locale: PropTypes.instanceOf(Object).isRequired,
  badge: PropTypes.node,
  iconMenu: PropTypes.node
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
  color: colors.theme,
  badge: null,
  iconMenu: null
};

export default StickerMessage;
