import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import colors from '../../settings/colors';
import getStyles from './get-styles';
import MessageHeader from '../message-header';
import MessageTime from '../message-time';
import styles from './styles';
import Button from '../../button';
import IconPlay from '../../icons/icon-play';
import IconPause from '../../icons/icon-pause';

const propTypes = {
  avatar: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  username: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['text', 'image', 'sticker', 'giphy', 'audio']),
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messageHeaderStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  messageTimeStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  myMessage: PropTypes.bool,
  compact: PropTypes.bool,
  color: PropTypes.string,
  badge: PropTypes.node,
  iconMenu: PropTypes.node,
  audio: PropTypes.shape({
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    progress: PropTypes.number.isRequired,
    time: PropTypes.node.isRequired
  }).isRequired
};

const defaultProps = {
  avatar: '',
  type: 'audio',
  style: {},
  messageHeaderStyle: {},
  messageTimeStyle: {},
  fontSize: 'small',
  myMessage: false,
  compact: false,
  color: colors.theme,
  badge: null,
  iconMenu: null
};

class AudioMessage extends Component {
  renderButton = () => {
    const { myMessage, audio } = this.props;

    if (audio.isPlaying) {
      return (
        <Button style={styles.button} iconButton onClick={audio.onPause}>
          <IconPause width="18" height="18" color={myMessage ? colors.white : colors.icons} />
        </Button>
      );
    }

    return (
      <Button style={styles.button} iconButton onClick={audio.onPlay}>
        <IconPlay width="18" height="18" color={myMessage ? colors.white : colors.icons} />
      </Button>
    );
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
      createdAt,
      username,
      type,
      messageTimeStyle,
      badge,
      iconMenu,
      audio
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
        <section style={styles.audioContainer}>
          {this.renderButton()}
          <div style={styles.playerContainer}>
            <section style={styles.progressContainer}>
              <div style={getStyles.bar(color, myMessage, audio.progress)} />
            </section>
            <span style={styles.time}>{audio.time}</span>
          </div>
        </section>
        <MessageTime
          myMessage={myMessage}
          type={type}
          style={messageTimeStyle}
          createdAt={createdAt}
          fontSize={fontSize}
        />
        {iconMenu ? <div style={styles.iconMenu}>{iconMenu}</div> : null}
      </div>
    );
  }
}

AudioMessage.propTypes = propTypes;
AudioMessage.defaultProps = defaultProps;

export default AudioMessage;
