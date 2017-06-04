import React from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';
import escape from 'escape-html';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import urlRegex from '../../url-regex';

function createMarkup(text, enableLinks) {
  const escapedText = escape(text);

  let parsedText = escapedText;

  if (enableLinks) {
    const urlSchemeRegex = /^(?:https?:\/\/)/;

    parsedText = escapedText.replace(urlRegex, (url) => {
      if (!urlSchemeRegex.test(url)) {
        // Add default http:// scheme for urls like example.com
        return (`<a href="http://${url}" target="_blank">${url}</a>`);
      }
      return (`<a href="${url}" target="_blank">${url}</a>`);
    });
  }

  return {
    __html: emojione.toImage(parsedText)
  };
}

function TextMessage({
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
  emoji,
  enableLinks,
  iconMenu
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
      />
      <p className={fontSize} style={getStyles.body(myMessage, fontSize, messageBodyStyle)}>
        {
          enableLinks || emoji
          ? <span dangerouslySetInnerHTML={createMarkup(message.body, enableLinks, emoji)} />
          : message.body
        }
        <MessageTime
          myMessage={myMessage}
          type={message.type}
          style={messageTimeStyle}
          createdAt={message.createdAt}
          timeFormat={timeFormat}
        />
        {iconMenu}
      </p>
    </div>
  );
}

TextMessage.propTypes = {
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
  emoji: PropTypes.bool,
  enableLinks: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  iconMenu: PropTypes.node
};

TextMessage.defaultProps = {
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
  iconMenu: null
};

export default TextMessage;
