import React from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';
import escape from 'escape-html';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import urlRegex from '../../url-regex';

function createMarkup(text, username, enableLinks, emoji, mentions) {
  const escapedText = escape(text);

  let parsedText = escapedText;

  if (enableLinks) {
    const urlSchemeRegex = /^(?:https?:\/\/)/;

    const style = 'color: inherit; font-size: inherit; font-weight: inherit; text-decoration: underline;';

    parsedText = escapedText.replace(urlRegex, (url) => {
      if (!urlSchemeRegex.test(url)) {
        // Add default http:// scheme for urls like example.com
        return (`<a style="${style}" href="http://${url}" target="_blank">${url}</a>`);
      }
      return (`<a style="${style}" href="${url}" target="_blank">${url}</a>`);
    });
  }

  if (mentions) {
    parsedText = parsedText.replace(/@\w/, `<strong>@${username}</strong>`);
  }

  let html = {
    __html: parsedText
  };

  if (emoji) {
    html = {
      __html: emojione.toImage(parsedText)
    };
  }

  return html;
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
  edited,
  locale,
  mentions
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
          enableLinks || emoji || mentions
          ? <span
            dangerouslySetInnerHTML={
              createMarkup(message.body, message.username, enableLinks, emoji, mentions)
            }
          />
          : message.body
        }
        <MessageTime
          myMessage={myMessage}
          type={message.type}
          style={messageTimeStyle}
          createdAt={message.createdAt}
          timeFormat={timeFormat}
          edited={edited}
          locale={locale}
        />
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
    type: PropTypes.oneOf(['text', 'image', 'sticker', 'typing'])
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
  edited: PropTypes.node,
  color: PropTypes.string,
  locale: PropTypes.instanceOf(Object).isRequired,
  mentions: PropTypes.bool.isRequired
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
  iconMenu: null,
  edited: null
};

export default TextMessage;
