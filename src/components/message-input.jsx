import React, { PropTypes } from 'react';
import csjs from 'csjs';
import withStyles from 'react-csjs';

const styles = csjs`
.input:focus {
  outline: 0
}`;

function MessageInput({ onChange, value, classes }) {
  return <input className={classes.input} onChange={onChange} value={value} type="text" />;
}

MessageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  classes: React.PropTypes.objectOf(React.PropTypes.object).isRequired
};

export default withStyles(styles)(MessageInput);
