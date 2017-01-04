import React, { PropTypes } from 'react';
import injectSheet from 'react-jss';
import getClassNames from '../get-class-names';
import inputStyle from '../style/inputs';

function MessageInput({ onChange, value, sheet: { classes }, style }) {
  return <input className={getClassNames(classes, 'input', style)} onChange={onChange} value={value} type="text" />;
}

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  sheet: PropTypes.shape({
    classes: PropTypes.shape({
      input: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  style: PropTypes.shape({
    input: PropTypes.object
  })
};

export default injectSheet(inputStyle)(MessageInput);
