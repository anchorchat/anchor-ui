import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import Radium from 'radium';
import emojione from 'emojione';
import escape from 'escape-html';
import shallowEqual from 'recompose/shallowEqual';
import Tappable from 'react-tappable/lib/Tappable';
import Avatar from '../avatar';
import styles from './styles';
import getStyles from './get-styles';
import urlRegex from '../url-regex';
import combineStyles from '../internal/combine-styles';
import PopOver from '../pop-over';
import getPopOverPosition from '../internal/get-pop-over-position';

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
      type: PropTypes.oneOf(['text', 'image'])
    }).isRequired,
    /** The format of displaying message.createdAt */
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
    /** Enables PopOver with MenuItems */
    menuItems: PropTypes.node
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
    menuItems: null
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      open: false,
      positioned: false,
      position: {}
    };

    this.handlePress = this.handlePress.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  componentDidUpdate() {
    const { open, positioned } = this.state;
    const { menuItems } = this.props;

    if (menuItems && open && !positioned) {
      this.positionPopOver();
    }
  }

  positionPopOver() {
    const button = this.button.getBoundingClientRect();
    const popOver = this.popOver.getBoundingClientRect();

    this.setState({
      positioned: true,
      position: getPopOverPosition(button, popOver)
    });
  }

  createMarkup(text) {
    const { enableLinks } = this.props;

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

  handlePress() {
    const { menuItems } = this.props;

    if (!menuItems) {
      return false;
    }

    return this.setState({
      open: true
    });
  }

  closeMenu() {
    this.setState({
      open: false,
      positioned: false
    });
  }

  renderMessageBody() {
    const { emoji, message } = this.props;

    if (message.type === 'image') {
      return <img style={styles.messageImage} src={message.body} alt="user-upload" />;
    }

    if (emoji) {
      return <span dangerouslySetInnerHTML={this.createMarkup(message.body)} />;
    }

    return message.body;
  }

  renderMenuItems() {
    const { menuItems } = this.props;
    const { open, position } = this.state;

    if (!menuItems) {
      return null;
    }

    const menuItemsWithProps = React.Children.map(
      menuItems, child => React.cloneElement(child, { closeMenu: this.closeMenu })
    );

    return (
      <div>
        {open ? <div style={styles.clickAway} onClick={this.closeMenu} /> : null}
        <PopOver
          open={open}
          popOverRef={popOver => (this.popOver = popOver)}
          position={position}
        >
          {menuItemsWithProps}
        </PopOver>
      </div>
    );
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
      emoji, // eslint-disable-line no-unused-vars
      enableLinks, // eslint-disable-line no-unused-vars
      menuItems, // eslint-disable-line no-unused-vars
      ...custom
    } = this.props;
    const { color } = this.context;

    const avatarStyle = {
      position: 'absolute',
      left: '-66px',
      top: '0'
    };

    if (myMessage) {
      avatarStyle.left = 'initial';
      avatarStyle.right = '-66px';
    }

    return (
      <section style={getStyles.container(myMessage, compact)} {...custom}>
        <Tappable
          pressDelay={500}
          onPress={this.handlePress}
          style={getStyles.root(color, myMessage, avatar, compact, style)}
        >
          {
            compact
            ? null
            : <div style={combineStyles(styles.arrow, myMessage ? styles.myArrow : {})} />
          }
          {avatar && !compact ? <Avatar image={avatar} style={avatarStyle} /> : null}
          <header
            style={
              getStyles.header(myMessage, compact, fontSize, messageHeaderStyle)
            }
          >
            {message.username}
          </header>
          <p style={getStyles.text(myMessage, fontSize, message.type, messageBodyStyle)}>
            {this.renderMessageBody()}
            <span
              ref={button => (this.button = button)}
              style={getStyles.time(myMessage, message.type, messageTimeStyle)}
            >
              {format(message.createdAt, timeFormat)}
            </span>
          </p>
          {this.renderMenuItems()}
        </Tappable>
      </section>
    );
  }
}

export default Radium(Message);
