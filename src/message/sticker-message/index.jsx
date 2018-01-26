import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

const propTypes = {
  avatar: PropTypes.string,
  body: PropTypes.node.isRequired,
  createdAt: PropTypes.string.isRequired,
  username: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'typing']),
  style: PropTypes.instanceOf(Object),
  messageHeaderStyle: PropTypes.instanceOf(Object),
  messageBodyStyle: PropTypes.instanceOf(Object),
  messageTimeStyle: PropTypes.instanceOf(Object),
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  myMessage: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  badge: PropTypes.node,
  iconMenu: PropTypes.node
};

const defaultProps = {
  avatar: '',
  type: 'text',
  style: {},
  messageHeaderStyle: {},
  messageBodyStyle: {},
  messageTimeStyle: {},
  fontSize: 'small',
  myMessage: false,
  compact: false,
  color: colors.theme,
  badge: null,
  iconMenu: null
};

const StickerMessage = ({
  color,
  myMessage,
  avatar,
  compact,
  style,
  fontSize,
  messageHeaderStyle,
  body,
  createdAt,
  username,
  type,
  messageBodyStyle,
  messageTimeStyle,
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
          username={username}
          stickerMessage
          badge={badge}
        />
        <MessageTime
          myMessage={myMessage}
          type={type}
          style={messageTimeStyle}
          createdAt={createdAt}
          fontSize={fontSize}
        />
        {iconMenu ? <div style={styles.iconMenu}>{iconMenu}</div> : null}
      </div>
      <img style={getStyles.body(myMessage, avatar, compact, messageBodyStyle)} src={body} alt="sticker" />
    </div>
  );
};

StickerMessage.propTypes = propTypes;
StickerMessage.defaultProps = defaultProps;

export default StickerMessage;
