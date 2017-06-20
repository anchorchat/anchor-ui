import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import styles from './styles';
import Lightbox from '../../lightbox';
import combineStyles from '../../internal/combine-styles';

class ImageMessage extends Component {
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
      collapsedText
    } = this.props;
    const { lightbox } = this.state;

    let onClick = null;

    if (enableLightbox) {
      onClick = this.toggleLightbox;
    }

    let headerStyle = messageHeaderStyle;
    let imageStyle = styles.image;

    if (compact) {
      headerStyle = combineStyles(headerStyle, { position: 'absolute', bottom: '12px' });
      imageStyle = combineStyles(imageStyle, { marginBottom: '5px' });
    }

    if (enableLightbox) {
      imageStyle = combineStyles(imageStyle, { cursor: 'pointer' });
    }

    return (
      <div style={getStyles.root(color, myMessage, avatar, compact, style)}>
        <MessageHeader
          avatar={avatar}
          compact={compact}
          myMessage={myMessage}
          fontSize={fontSize}
          headerStyle={headerStyle}
          username={message.username}
        />
        <p style={getStyles.body(myMessage, fontSize, messageBodyStyle)}>
          {
            !collapsed
            ? <img onClick={onClick} style={imageStyle} src={message.body} alt="user-upload" />
            : <span>{collapsedText}</span>
          }
          <MessageTime
            myMessage={myMessage}
            type={message.type}
            style={messageTimeStyle}
            createdAt={message.createdAt}
            timeFormat={timeFormat}
          />
        </p>
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

ImageMessage.propTypes = {
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
  enableLightbox: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  collapsed: PropTypes.bool,
  collapsedText: PropTypes.node
};

ImageMessage.defaultProps = {
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
  collapsedText: 'This image has been collapsed, click the button to expand it.',
  iconMenu: null
};

export default ImageMessage;
