import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';
import escape from 'escape-html';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import htmlParser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import urlRegex from '../../url-regex';
import styles from './styles';

class TextMessage extends Component {
  createMarkup = () => {
    const { message, enableLinks, emoji, mentions } = this.props;
    const text = message.body;

    const escapedText = escape(text);

    let parsedText = escapedText;

    if (enableLinks) {
      const urlSchemeRegex = /^(?:https?:\/\/)/;

      parsedText = escapedText.replace(urlRegex, (url) => {
        if (!urlSchemeRegex.test(url)) {
          // Add default http:// scheme for urls like example.com
          return (`<a class="link" value="http://${url}" href="http://${url}">${url}</a>`);
        }
        return (`<a class="link" value="${url}" href="${url}">${url}</a>`);
      });
    }

    if (!isEmpty(mentions)) {
      forEach(mentions, (mention) => {
        parsedText = parsedText.replace(`@${mention}`, `<span class="mention" value="${mention}">@${mention}</span>`);
      });
    }

    let html = parsedText;

    if (emoji) {
      html = emojione.toImage(parsedText);
    }

    return html;
  }

  parseHtml = () => {
    const { onMentionClick, color, myMessage } = this.props;

    const options = {
      replace: (domNode) => {
        if (domNode.attribs && domNode.attribs.class === 'mention') {
          const value = domNode.attribs.value;

          return (
            <strong
              style={getStyles.mention(color, myMessage, onMentionClick)}
              onClick={onMentionClick ? e => onMentionClick(e, value) : null}
            >
              {domToReact(domNode.children)}
            </strong>
          );
        }

        if (domNode.attribs && domNode.attribs.class === 'link') {
          const value = domNode.attribs.value;

          return (
            <a style={styles.link} href={value} target="_blank" rel="noopener noreferrer">
              {domToReact(domNode.children)}
            </a>
          );
        }

        return domNode;
      }
    };

    return htmlParser(this.createMarkup(), options);
  }

  render() {
    const {
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
    } = this.props;

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
            enableLinks || emoji || !isEmpty(mentions)
            ? <span>{this.parseHtml()}</span>
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
  mentions: PropTypes.arrayOf(String).isRequired,
  onMentionClick: PropTypes.func.isRequired
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
