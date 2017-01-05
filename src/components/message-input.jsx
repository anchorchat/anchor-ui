import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import inputStyle from '../style/inputs';
import Button from './button';
import IconSend from '../icons/icon-send';
import colors from '../style/colors';

function MessageInput({ onChange, sendMessage, placeholder, value, sheet: { classes }, style }) {
  const buttonStyle = {
    button: {
      position: 'absolute',
      right: '0'
    }
  };

  return (
    <section>
      <input className={getClassNames(classes, 'messageInput', style)} placeholder={placeholder} onChange={onChange} value={value} type="text" />
      <Button onClick={sendMessage} style={buttonStyle}>
        <IconSend color={colors.green} />
      </Button>
    </section>
  );
}

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      messageInput: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.shape({
    messageInput: PropTypes.object
  })
};

export default injectSheet(inputStyle)(MessageInput);
