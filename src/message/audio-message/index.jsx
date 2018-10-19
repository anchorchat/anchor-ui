import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import ReactPlayer from 'react-player';
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
  body: PropTypes.node.isRequired,
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
  iconMenu: PropTypes.node
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
  state = {
    playing: false,
    progress: {
      played: 0,
      playedSeconds: 0,
      loaded: 0,
      loadedSeconds: 0
    }
  }

  handlePlay = () => {
    this.setState({
      playing: true
    });
  }

  handlePause = () => {
    this.setState({
      playing: false
    });
  }

  handleProgress = (progress) => {
    this.setState({
      progress
    });

    if (progress.played === 1) {
      this.handlePause();
    }
  }

  renderButton = () => {
    const { myMessage } = this.props;
    const { playing } = this.state;

    if (playing) {
      return (
        <Button style={styles.button} iconButton onClick={this.handlePause}>
          <IconPause width="18" height="18" color={myMessage ? colors.white : colors.icons} />
        </Button>
      );
    }

    return (
      <Button style={styles.button} iconButton onClick={this.handlePlay}>
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
      body
    } = this.props;
    const { playing, progress } = this.state;

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
        <div style={styles.container}>
          <ReactPlayer
            url={body}
            playing={playing}
            width="0"
            height="0"
            onProgress={this.handleProgress}
            progressInterval={500}
          />
          <section style={styles.playerContainer}>
            {this.renderButton()}
            <section style={styles.barContainer}>
              <div style={getStyles.bar(color, myMessage, progress.played)} />
            </section>
          </section>
          <MessageTime
            myMessage={myMessage}
            type={type}
            style={messageTimeStyle}
            createdAt={createdAt}
            fontSize={fontSize}
          />
        </div>
        {iconMenu ? <div style={styles.iconMenu}>{iconMenu}</div> : null}
      </div>
    );
  }
}

AudioMessage.propTypes = propTypes;
AudioMessage.defaultProps = defaultProps;

export default AudioMessage;
