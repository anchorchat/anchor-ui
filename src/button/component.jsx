import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';

const displayName = 'Button';

const propTypes = {
  /** Content of the button */
  children: PropTypes.node.isRequired,
  /**
   * Callback fired when the Button is clicked
   *
   * function(event: object) => void
   */
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
  flatButton: PropTypes.bool,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  iconButton: false,
  inverted: false,
  onClick: null,
  disabled: false,
  flatButton: false
};

/** General purpose button with three types */
const Button = ({
  children, onClick, iconButton, inverted, style, disabled, flatButton, color, ...custom
}) => (
  <button
    onClick={onClick}
    style={getStyles.root(color, inverted, iconButton, disabled, flatButton, style)}
    disabled={disabled}
    {...custom}
  >
    {children}
  </button>
);

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
