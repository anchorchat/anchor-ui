import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import Radium from 'radium';
import getStyles from './get-styles';
import themeable from '../internal/themeable-component';

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
  flatButton: PropTypes.bool,
  color: PropTypes.string.isRequired
};

Button.defaultProps = {
  style: {},
  iconButton: false,
  inverted: false,
  onClick: null,
  disabled: false,
  flatButton: false
};

const enhance = compose(
  themeable,
  Radium,
  pure
);

export default enhance(Button);
