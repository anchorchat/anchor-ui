import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import Radium from 'radium';
import getStyles from './get-styles';

/** General purpose button with three types */
function Button(
  { children, onClick, iconButton, inverted, style, disabled, flatButton, ...custom }, { color }
) {
  return (
    <button
      key="button"
      onClick={onClick}
      style={getStyles.root(color, inverted, iconButton, disabled, flatButton, style)}
      disabled={disabled}
      {...custom}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';

Button.propTypes = {
  /** Content of the button */
  children: PropTypes.node.isRequired,
  /** Button onClick function */
  onClick: PropTypes.func,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Toggle IconButton type */
  iconButton: PropTypes.bool,
  /** Inverts color */
  inverted: PropTypes.bool,
  /** Disables the button */
  disabled: PropTypes.bool,
  /** Toggle FlatButton type */
  flatButton: PropTypes.bool
};

Button.defaultProps = {
  style: {},
  iconButton: false,
  inverted: false,
  onClick: null,
  disabled: false,
  flatButton: false
};

export default pure(Radium(Button));
