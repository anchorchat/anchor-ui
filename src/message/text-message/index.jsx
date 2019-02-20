import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';
import Autolinker from 'autolinker';
import escape from 'escape-html';
import compose from 'lodash/fp/compose';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import find from 'lodash/find';
import replace from 'lodash/replace';
import htmlParser from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import styles from './styles';

const propTypes = {
  avatar: PropTypes.string,
  body: PropTypes.node.isRequired,
  createdAt: PropTypes.string.isRequired,
  username: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'video', 'audio']),
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
  autolinkText = (text) => {
    const { enableLinks } = this.props;

    const autolinkOptions = {
      className: 'link',
      urls: true,
      email: false,
      phone: false,
      mention: false,
      hashtag: false
    };

    return enableLinks ? Autolinker.link(text, autolinkOptions) : text;
  }

  emojiToImage = (text) => {
    const { emoji } = this.props;

    return emoji ? emojione.toImage(text) : text;
  }

  nl2br = (text) => {
    const { enableMultiline } = this.props;

    return enableMultiline ? replace(text, /\n/g, '<br />') : text;
  }

  highlightText = (text) => {
    const { highlights } = this.props;

    if (isEmpty(highlights)) {
      return text;
    }

    let highlightedText = text;

    forEach(highlights, (highlight) => {
      highlightedText = replace(
        text,
        `${highlight.prefix}${highlight.value}`, `<span class="highlight" value="${highlight.id}">${highlight.prefix}${highlight.value}</span>`
      );
    });

    return highlightedText;
  }

  createMarkup = compose(
    this.nl2br,
    this.highlightText,
    this.emojiToImage,
    this.autolinkText,
    escape
  )

  parseHtml = () => {
    const {
      body,
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

    return htmlParser(this.createMarkup(body), options);
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
