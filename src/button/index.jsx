import React, { Component, PropTypes } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import getStyles from './get-styles';

/** General purpose button with two types */
class Button extends Component {
  static displayName = 'Button'

  static propTypes = {
    /** The Button's content */
    children: PropTypes.node.isRequired,
    /** Button onClick function */
    onClick: PropTypes.func,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Toggle IconButton type */
    iconButton: PropTypes.bool,
    /** Inverts colors */
    inverted: PropTypes.bool,
    /** Disables the button */
    disabled: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    iconButton: false,
    inverted: false,
    onClick: null,
    disabled: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext) ||
      Radium.getState(this.state, 'button', ':hover') !== Radium.getState(nextState, 'button', ':hover') ||
      Radium.getState(this.state, 'button', ':active') !== Radium.getState(nextState, 'button', ':active')
    );
  }

  render() {
    const { children, onClick, iconButton, inverted, style, disabled, ...custom } = this.props;
    const { color } = this.context;

    return (
      <button
        key="button"
        onClick={onClick}
        style={getStyles.root(color, inverted, iconButton, disabled, style)}
        disabled={disabled}
        {...custom}
      >
        {children}
      </button>
    );
  }
}

export default Radium(Button);
