import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import styles from './styles';
import Lightbox from '../../lightbox';
import combineStyles from '../../internal/combine-styles';
import ImageLoader from '../../image-loader';

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
      collapsedText,
      locale,
      badge,
      imagePlaceholder,
      imageError,
      onImageLoad
    } = this.props;
    const { lightbox } = this.state;

    let onClick = null;

    if (enableLightbox) {
      onClick = this.toggleLightbox;
    }

    let headerStyle = messageHeaderStyle;
    let imageStyle = styles.image;

    if (compact) {
      headerStyle = combineStyles(headerStyle, { marginBottom: '8px' });
    }

    if (enableLightbox) {
      imageStyle = combineStyles(imageStyle, { cursor: 'pointer' });
    }

    const imgProps = {
      onClick,
      style: imageStyle
    };

    const placeholder = <img style={imageStyle} src={imagePlaceholder} alt="placeholder" />;
    const error = <img style={imageStyle} src={imageError} alt="error" />;

    return (
      <div style={getStyles.root(color, myMessage, avatar, compact, style)}>
        <MessageHeader
          avatar={avatar}
          compact={compact}
          myMessage={myMessage}
          fontSize={fontSize}
          headerStyle={headerStyle}
          username={message.username}
          badge={badge}
        />
        <p style={getStyles.body(myMessage, fontSize, messageBodyStyle)}>
          {
            !collapsed
            ? (
              <ImageLoader
                src={message.body}
                alt="user-upload"
                imgProps={imgProps}
                placeholder={placeholder}
                error={error}
                onLoad={onImageLoad}
              />
            )
            : <span>{collapsedText}</span>
          }
          <MessageTime
            myMessage={myMessage}
            type={message.type}
            style={messageTimeStyle}
            createdAt={message.createdAt}
            timeFormat={timeFormat}
            locale={locale}
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
  collapsedText: PropTypes.node,
  locale: PropTypes.instanceOf(Object).isRequired,
  badge: PropTypes.node,
  imagePlaceholder: PropTypes.string.isRequired,
  imageError: PropTypes.string.isRequired,
  onImageLoad: PropTypes.func.isRequired
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
  iconMenu: null,
  badge: null
};

export default ImageMessage;
