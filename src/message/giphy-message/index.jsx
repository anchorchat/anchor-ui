import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import styles from './styles';
import Lightbox from '../../lightbox';
import combineStyles from '../../internal/combine-styles';
import ImageLoader from '../../image-loader';

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
  enableLightbox: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  collapsed: PropTypes.bool,
  collapsedText: PropTypes.node.isRequired,
  giphyDescription: PropTypes.node.isRequired,
  badge: PropTypes.node,
  imagePlaceholder: PropTypes.string.isRequired,
  imageError: PropTypes.string.isRequired,
  onImageLoad: PropTypes.func.isRequired,
  onImageError: PropTypes.func.isRequired,
  iconMenu: PropTypes.node
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
  compact: false,
  enableLightbox: false,
  color: '',
  collapsed: false,
  badge: null,
  iconMenu: null
};

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
      body,
      createdAt,
      username,
      type,
      messageBodyStyle,
      messageTimeStyle,
      enableLightbox,
      collapsed,
      collapsedText,
      giphyDescription,
      badge,
      imagePlaceholder,
      imageError,
      onImageLoad,
      onImageError,
      iconMenu
    } = this.props;
    const { lightbox } = this.state;

    let onClick = null;
    let headerStyle = combineStyles(messageHeaderStyle, { marginBottom: '9px' });

    if (enableLightbox) {
      onClick = this.toggleLightbox;
    }

    if (collapsed) {
      headerStyle = combineStyles(headerStyle, { marginBottom: '5px' });
    }

    const imgProps = {
      onClick,
      style: getStyles.giphy(enableLightbox)
    };

    const placeholder = <img style={getStyles.giphy(enableLightbox)} src={imagePlaceholder} alt="placeholder" />;
    const error = <img style={getStyles.giphy(enableLightbox)} src={imageError} alt="error" />;

    return (
      <div style={getStyles.root(color, myMessage, avatar, compact, collapsed, iconMenu, style)}>
        <MessageHeader
          avatar={avatar}
          compact={compact}
          myMessage={myMessage}
          fontSize={fontSize}
          headerStyle={headerStyle}
          username={username}
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
            ? (
              <ImageLoader
                src={body}
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
            type={type}
            style={messageTimeStyle}
            createdAt={createdAt}
            collapsed={collapsed}
            fontSize={fontSize}
          />
        </p>
        {iconMenu ? <div style={styles.iconMenu}>{iconMenu}</div> : null}
        {
          enableLightbox
          ? <Lightbox
            open={lightbox}
            image={body}
            title={username}
            hideLightbox={this.toggleLightbox}
          />
          : null
        }
      </div>
    );
  }
}

GiphyMessage.propTypes = propTypes;
GiphyMessage.defaultProps = defaultProps;

export default GiphyMessage;
