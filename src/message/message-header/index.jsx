import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../avatar';
import combineStyles from '../../internal/combine-styles';
import getStyles from '../get-styles';
import styles from '../styles';

function MessageHeader({ compact, myMessage, avatar, fontSize, headerStyle, username }) {
  const avatarStyle = {
    position: 'absolute',
    left: '-66px',
    top: '0'
  };

  if (myMessage) {
    avatarStyle.left = 'initial';
    avatarStyle.right = '-66px';
  }

  const style = {
    container: {
      borderLeftColor: 'inherit',
      borderRightColor: 'inherit'
    }
  };

  return (
    <div style={style.container}>
      {
        compact
        ? null
        : <div style={combineStyles(styles.arrow, myMessage ? styles.myArrow : {})} />
      }
      {avatar && !compact ? <Avatar image={avatar} style={avatarStyle} /> : null}
      <header
        style={
          getStyles.header(myMessage, compact, fontSize, headerStyle)
        }
      >
        {username}
      </header>
    </div>
  );
}

MessageHeader.propTypes = {
  avatar: PropTypes.string,
  compact: PropTypes.bool,
  myMessage: PropTypes.bool,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  headerStyle: PropTypes.instanceOf(Object),
  username: PropTypes.string.isRequired
};

MessageHeader.defaultProps = {
  avatar: '',
  headerStyle: {},
  fontSize: 'small',
  myMessage: false,
  compact: false
};

export default MessageHeader;
