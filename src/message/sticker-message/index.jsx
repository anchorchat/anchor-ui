import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';
import ImageLoader from '../../image-loader';

const propTypes = {
  avatar: PropTypes.string,
  body: PropTypes.node.isRequired,
  createdAt: PropTypes.string.isRequired,
  username: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'audio']),
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messageHeaderStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messageBodyStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messageTimeStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  myMessage: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  badge: PropTypes.node,
  iconMenu: PropTypes.node,
  imageLoaderProps: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
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
  iconMenu,
  imageLoaderProps
}) => {
  const headerStyle = combineStyles(messageHeaderStyle, { marginBottom: 0 });

  const imgProps = {
    style: getStyles.body(myMessage, avatar, compact, messageBodyStyle)
  };

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
      <ImageLoader
        src={body}
        alt="user-upload"
        imgProps={imgProps}
        {...imageLoaderProps}
      />
    </div>
  );
};

StickerMessage.propTypes = propTypes;
StickerMessage.defaultProps = defaultProps;

export default StickerMessage;
