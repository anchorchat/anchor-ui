import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';
import escape from 'escape-html';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import find from 'lodash/find';
import size from 'lodash/size';
import replace from 'lodash/replace';
import htmlParser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import urlRegex from '../../url-regex';
import styles from './styles';

const propTypes = {
  avatar: PropTypes.string,
  body: PropTypes.node.isRequired,
  createdAt: PropTypes.string.isRequired,
  username: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'typing']),
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messageHeaderStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messageBodyStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messageTimeStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  myMessage: PropTypes.bool,
  emoji: PropTypes.bool,
  enableLinks: PropTypes.bool,
  compact: PropTypes.bool,
  edited: PropTypes.node,
  color: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    prefix: PropTypes.string,
    value: PropTypes.string,
  })),
  onHighlightClick: PropTypes.func.isRequired,
  badge: PropTypes.node,
  iconMenu: PropTypes.node,
  enableMultiline: PropTypes.bool
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
  emoji: false,
  enableLinks: false,
  compact: false,
  color: colors.theme,
  edited: null,
  highlights: [],
  badge: null,
  iconMenu: null,
  enableMultiline: false
};

class TextMessage extends Component {
  createMarkup = () => {
    const {
      body,
      enableLinks,
      emoji,
      highlights,
      enableMultiline
    } = this.props;

    const text = body;

    const escapedText = escape(text);

    let parsedText = escapedText;

    // XXX: Should find a prettier solution for this
    const dotCount = escapedText.match(/([0-9])+./g);

    if (enableLinks && size(dotCount) < 10) {
      const urlSchemeRegex = /^(?:https?:\/\/)/;

      parsedText = replace(escapedText, urlRegex, (url) => {
        if (!urlSchemeRegex.test(url)) {
          // Add default http:// scheme for urls like example.com
          return (`<a class="link" value="http://${url}" href="http://${url}">${url}</a>`);
        }
        return (`<a class="link" value="${url}" href="${url}">${url}</a>`);
      });
    }

    if (!isEmpty(highlights)) {
      forEach(highlights, (highlight) => {
        parsedText = replace(parsedText, `${highlight.prefix}${highlight.value}`, `<span class="highlight" value="${highlight.id}">${highlight.prefix}${highlight.value}</span>`);
      });
    }

    let html = parsedText;

    if (emoji) {
      html = emojione.toImage(parsedText);
    }

    if (enableMultiline) {
      html = replace(html, /\n/g, '<br />');
    }

    return html;
  }

  parseHtml = () => {
    const {
      onHighlightClick,
      color,
      myMessage,
      highlights
    } = this.props;

    const options = {
      replace: (domNode) => {
        if (domNode.attribs && domNode.attribs.class === 'highlight') {
          const value = find(highlights, { id: domNode.attribs.value });

          return (
            <strong
              style={getStyles.mention(color, myMessage, onHighlightClick)}
              onClick={e => onHighlightClick(e, value)}
            >
              {domToReact(domNode.children)}
            </strong>
          );
        }

        if (domNode.attribs && domNode.attribs.class === 'link') {
          const { value } = domNode.attribs;

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
      body,
      createdAt,
      username,
      type,
      messageBodyStyle,
      messageTimeStyle,
      emoji,
      enableLinks,
      edited,
      highlights,
      badge,
      iconMenu,
      enableMultiline
    } = this.props;

    return (
      <div style={getStyles.root(color, myMessage, avatar, compact, iconMenu, style)}>
        <MessageHeader
          avatar={avatar}
          compact={compact}
          myMessage={myMessage}
          fontSize={fontSize}
          headerStyle={messageHeaderStyle}
          username={username}
          badge={badge}
          iconMenu={!isEmpty(iconMenu)}
        />
        <p className={fontSize} style={getStyles.body(myMessage, fontSize, messageBodyStyle)}>
          {
            enableLinks || enableMultiline || emoji || !isEmpty(highlights)
            ? <span>{this.parseHtml()}</span>
            : body
          }
          <MessageTime
            myMessage={myMessage}
            type={type}
            style={messageTimeStyle}
            createdAt={createdAt}
            edited={edited}
            fontSize={fontSize}
          />
        </p>
        {iconMenu ? <div style={styles.iconMenu}>{iconMenu}</div> : null}
      </div>
    );
  }
}

TextMessage.propTypes = propTypes;
TextMessage.defaultProps = defaultProps;

export default TextMessage;
