import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import compose from 'recompose/compose';
import en from 'date-fns/locale/en';
import noop from 'lodash/noop';
import getStyles from './get-styles';
import TextMessage from './text-message';
import ImageMessage from './image-message';
import GiphyMessage from './giphy-message';
import StickerMessage from './sticker-message';
import themeable from '../themeable';
import styles from './styles';

/** Messages with optional styling for the current user's message,
different font sizes and message styles */
class Message extends Component {
  static displayName = 'Message'

  static propTypes = {
    /** Path to the user's profile image will only be rendered if provided */
    avatar: PropTypes.string,
    /** Message object containing : body, createdAt, username */
    message: PropTypes.shape({
      /** The message's body text */
      body: PropTypes.node.isRequired,
      /** Time when the message was created */
      createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
      ]).isRequired,
      /** The sender's username */
      username: PropTypes.string.isRequired,
      /** The message's type */
      type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy'])
    }).isRequired,
    /**
     * The format of displaying message.createdAt
     *
     * https://date-fns.org/docs/format
     */
    timeFormat: PropTypes.string,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    messageHeaderStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the body element */
    messageBodyStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the time element */
    messageTimeStyle: PropTypes.instanceOf(Object),
    /** The message size. One of the following: ["small", "medium", "large"] */
    fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Flag used to change message styles. True if the message was sent by the current user */
    myMessage: PropTypes.bool,
    /** Enable emojione for messages */
    emoji: PropTypes.bool,
    /** Enables links in messages */
    enableLinks: PropTypes.bool,
    /** Enables compact messages */
    compact: PropTypes.bool,
    /** Enables Lighbox for image messages */
    enableLightbox: PropTypes.bool,
    /** Collapse an image message */
    collapsed: PropTypes.bool,
    /** Text to display for collapsed messages */
    collapsedText: PropTypes.node,
    /** Text to display above giphy messages */
    giphyDescription: PropTypes.node,
    /** Text to display for edited banner */
    edited: PropTypes.node,
    /**
     * Internationalization, defaults to English
     *
     * https://date-fns.org/docs/I18n
     */
    locale: PropTypes.instanceOf(Object),
    /** Show a separator above the message */
    separator: PropTypes.node,
    /**
     * Highlight text, must be an array of objects containing id, value, and prefix.
     *
     * Text matching '[prefix][value]' will be highlighted
     */
    highlights: PropTypes.arrayOf(String),
    /**
     * Callback fired when highlighted text is clicked
     *
     * function(event: object, highlight: object) => void
     */
    onHighlightClick: PropTypes.func,
    /** Badge to display next to message.username */
    badge: PropTypes.node,
    /** Render an IconMenu in Message */
    iconMenu: PropTypes.node,
    /** Enables multiline messages */
    enableMultiline: PropTypes.bool,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
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
    collapsed: false,
    collapsedText: 'This image has been collapsed.',
    giphyDescription: 'Sent using /giphy',
    edited: null,
    locale: en,
    separator: null,
    highlights: [],
    onHighlightClick: noop,
    badge: null,
    iconMenu: null,
    enableMultiline: false
  }

  render() {
    const {
      avatar,
      message,
      timeFormat,
      myMessage,
      style,
      messageHeaderStyle,
      messageBodyStyle,
      messageTimeStyle,
      compact,
      fontSize,
      emoji,
      enableLinks,
      enableLightbox,
      collapsed,
      collapsedText,
      edited,
      locale,
      highlights,
      onHighlightClick,
      color,
      separator,
      badge,
      giphyDescription,
      iconMenu,
      enableMultiline,
      ...custom
    } = this.props;

    let messageElement = <TextMessage color={color} {...this.props} />;

    if (message.type === 'image') {
      messageElement = <ImageMessage color={color} {...this.props} />;
    }

    if (message.type === 'sticker') {
      messageElement = <StickerMessage color={color} {...this.props} />;
    }

    if (message.type === 'giphy') {
      messageElement = <GiphyMessage color={color} {...this.props} />;
    }

    return (
      <div style={styles.root}>
        {separator}
        <section style={getStyles.container(myMessage, compact)} {...custom}>
          {messageElement}
        </section>
      </div>
    );
  }
}

const enhance = compose(
  themeable(),
  Radium
);

export default enhance(Message);
