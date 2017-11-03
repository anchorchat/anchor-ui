import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../avatar';
import getStyles from './get-styles';
import styles from './styles';

const MessageHeader = ({
  compact, myMessage, avatar, fontSize, headerStyle, username, badge, iconMenu
}) => (
  <div style={styles.container}>
    {avatar && !compact ? <Avatar image={avatar} style={getStyles.avatar(myMessage)} /> : null}
    <header
      style={
        getStyles.header(myMessage, compact, fontSize, badge, iconMenu, headerStyle)
      }
    >
      {username}
      {badge ? <div style={styles.badge}>{badge}</div> : null}
    </header>
  </div>
);

MessageHeader.propTypes = {
  avatar: PropTypes.string,
  compact: PropTypes.bool,
  myMessage: PropTypes.bool,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  headerStyle: PropTypes.instanceOf(Object),
  username: PropTypes.string.isRequired,
  badge: PropTypes.node,
  iconMenu: PropTypes.bool
};

MessageHeader.defaultProps = {
  avatar: '',
  headerStyle: {},
  fontSize: 'small',
  myMessage: false,
  compact: false,
  badge: null,
  iconMenu: false
};

export default MessageHeader;
