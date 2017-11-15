import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import styles from './styles';
import Lightbox from '../../lightbox';
import combineStyles from '../../internal/combine-styles';
import ImageLoader from '../../image-loader';

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
      imagePlaceholder,
      imageError,
      onImageLoad,
      onImageError
    } = this.props;
    const { lightbox } = this.state;

    let onClick = null;

    if (enableLightbox) {
      onClick = this.toggleLightbox;
    }

    let headerStyle = messageHeaderStyle;
    let giphyStyle = styles.giphy;

    if (compact) {
      headerStyle = combineStyles(headerStyle, { marginBottom: '8px' });
    }

    if (enableLightbox) {
      giphyStyle = combineStyles(giphyStyle, { cursor: 'pointer' });
    }

    const imgProps = {
      onClick,
      style: giphyStyle
    };

    const placeholder = <img style={giphyStyle} src={imagePlaceholder} alt="placeholder" />;
    const error = <img style={giphyStyle} src={imageError} alt="error" />;

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
            !collapsed && giphyDescription
            ? <span style={styles.giphyDescription}>{giphyDescription}</span>
            : null
          }
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
                onError={onImageError}
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
  collapsedText: PropTypes.node,
  giphyDescription: PropTypes.node,
  locale: PropTypes.instanceOf(Object).isRequired,
  badge: PropTypes.node,
  imagePlaceholder: PropTypes.string.isRequired,
  imageError: PropTypes.string.isRequired,
  onImageLoad: PropTypes.func.isRequired,
  onImageError: PropTypes.func.isRequired
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
  collapsedText: 'This GIF has been collapsed, click the button to expand it.',
  giphyDescription: 'Sent using /giphy',
  iconMenu: null,
  badge: null
};

export default GiphyMessage;
