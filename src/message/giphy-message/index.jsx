import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import styles from './styles';
import Lightbox from '../../lightbox';
import combineStyles from '../../internal/combine-styles';

class GiphyMessage extends Component {
  constructor() {
    super();

    this.state = {
      lightbox: false
    };
  }

  toggleLightbox = () => {
    const { enableLightbox } = this.props;

    if (!enableLightbox) {
      return false;
    }

    return this.setState({
      lightbox: !this.state.lightbox
    });
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
      enableLightbox,
      collapsed,
      collapsedText,
      giphyDescription,
      locale,
      badge,
      iconMenu
    } = this.props;
    const { lightbox } = this.state;

    let onClick = null;
    let headerStyle = combineStyles(messageHeaderStyle, { marginBottom: '8px' });

    if (enableLightbox) {
      onClick = this.toggleLightbox;
    }

    if (collapsed) {
      headerStyle = combineStyles(headerStyle, { marginBottom: '0' });
    }

    return (
      <div style={getStyles.root(color, myMessage, avatar, compact, collapsed, iconMenu, style)}>
        <MessageHeader
          avatar={avatar}
          compact={compact}
          myMessage={myMessage}
          fontSize={fontSize}
          headerStyle={headerStyle}
          username={message.username}
          badge={badge}
          iconMenu={!isEmpty(iconMenu)}
        />
        <p style={getStyles.body(myMessage, fontSize, collapsed, messageBodyStyle)}>
          {
            !collapsed && giphyDescription
            ? <span style={styles.giphyDescription}>{giphyDescription}</span>
            : null
          }
          {
            !collapsed
            ? <img onClick={onClick} style={getStyles.giphy(enableLightbox)} src={message.body} alt="user-upload" />
            : <span>{collapsedText}</span>
          }
          <MessageTime
            myMessage={myMessage}
            type={message.type}
            style={messageTimeStyle}
            createdAt={message.createdAt}
            timeFormat={timeFormat}
            locale={locale}
            collapsed={collapsed}
            fontSize={fontSize}
          />
        </p>
        {iconMenu ? <div style={styles.iconMenu}>{iconMenu}</div> : null}
        {
          enableLightbox
          ? <Lightbox
            open={lightbox}
            image={message.body}
            title={message.username}
            hideLightbox={this.toggleLightbox}
          />
          : null
        }
      </div>
    );
  }
}

GiphyMessage.propTypes = {
  avatar: PropTypes.string,
  message: PropTypes.shape({
    body: PropTypes.node.isRequired,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]).isRequired,
    username: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'typing'])
  }).isRequired,
  timeFormat: PropTypes.string,
  style: PropTypes.instanceOf(Object),
  messageHeaderStyle: PropTypes.instanceOf(Object),
  messageBodyStyle: PropTypes.instanceOf(Object),
  messageTimeStyle: PropTypes.instanceOf(Object),
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  myMessage: PropTypes.bool,
  enableLightbox: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  collapsed: PropTypes.bool,
  collapsedText: PropTypes.node.isRequired,
  giphyDescription: PropTypes.node.isRequired,
  locale: PropTypes.instanceOf(Object).isRequired,
  badge: PropTypes.node,
  iconMenu: PropTypes.node
};

GiphyMessage.defaultProps = {
  avatar: '',
  style: {},
  timeFormat: 'HH:mm',
  messageHeaderStyle: {},
  messageBodyStyle: {},
  messageTimeStyle: {},
  fontSize: 'small',
  myMessage: false,
  compact: false,
  enableLightbox: false,
  color: '',
  collapsed: false,
  badge: null,
  iconMenu: null
};

export default GiphyMessage;
