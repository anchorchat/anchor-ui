import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import combineStyles from '../../internal/combine-styles';
import styles from './styles';

const propTypes = {
  avatar: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  username: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'video']),
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
  video: PropTypes.node.isRequired,
  collapsed: PropTypes.bool,
  collapsedText: PropTypes.node.isRequired,
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
  color: '',
  badge: null,
  iconMenu: null,
  collapsed: false
};

const VideoMessage = ({
  color,
  myMessage,
  avatar,
  compact,
  style,
  fontSize,
  messageHeaderStyle,
  createdAt,
  username,
  type,
  messageBodyStyle,
  messageTimeStyle,
  badge,
  iconMenu,
  video,
  collapsed,
  collapsedText
}) => {
  const headerStyle = combineStyles(messageHeaderStyle, { marginBottom: '9px' });

  return (
    <div style={getStyles.root(color, myMessage, avatar, compact, collapsed, iconMenu, style)}>
      <MessageHeader
        avatar={avatar}
        compact={compact}
        myMessage={myMessage}
        fontSize={fontSize}
        headerStyle={headerStyle}
        username={username}
        badge={badge}
        iconMenu={!isEmpty(iconMenu)}
      />
      <p style={getStyles.body(myMessage, fontSize, collapsed, messageBodyStyle)}>
        {
          !collapsed
          ? video
          : <span>{collapsedText}</span>
        }
        <MessageTime
          myMessage={myMessage}
          type={type}
          style={messageTimeStyle}
          createdAt={createdAt}
          fontSize={fontSize}
          collapsed={collapsed}
        />
      </p>
      {iconMenu ? <div style={styles.iconMenu}>{iconMenu}</div> : null}
    </div>
  );
};

VideoMessage.propTypes = propTypes;
VideoMessage.defaultProps = defaultProps;

export default VideoMessage;
