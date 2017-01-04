import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import inputStyle from '../style/inputs';

function MessageInput({ onChange, placeholder, value, sheet: { classes }, style }) {
  return <input className={getClassNames(classes, 'messageInput', style)} placeholder={placeholder} onChange={onChange} value={value} type="text" />;
}

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      input: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.shape({
    messageInput: PropTypes.object
  })
};

export default injectSheet(inputStyle)(MessageInput);
