import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import MessageHeader from './message-header';
import MessageTime from './message-time';
import styles from './styles';
import Lightbox from '../lightbox';

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
      enableLightbox
    } = this.props;
    const { lightbox } = this.state;

    let onClick = null;

    if (enableLightbox) {
      onClick = this.toggleLightbox;
    }

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
        <p style={getStyles.text(myMessage, fontSize, message.type, messageBodyStyle)}>
          <img onClick={onClick} style={styles.messageImage} src={message.body} alt="user-upload" />
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
          ? <Lightbox open={lightbox} image={message.body} hideLightbox={this.toggleLightbox} />
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
    type: PropTypes.oneOf(['text', 'image', 'sticker'])
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
  color: PropTypes.string
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
  color: ''
};

export default ImageMessage;
