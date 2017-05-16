import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import getStyles from './get-styles';

/** General purpose button with three types */
class Button extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      color: this.context.theme.color
    };
  }

  componentDidMount() {
    this.context.theme.subscribe(this.setColor);
  }

  setColor = (color) => {
    this.setState({ color });
  }

  render() {
    const {
      children, onClick, iconButton, inverted, style, disabled, flatButton, ...custom
    } = this.props;
    const { theme } = this.context;

    return (
      <button
        onClick={onClick}
        style={getStyles.root(theme.color, inverted, iconButton, disabled, flatButton, style)}
        disabled={disabled}
        {...custom}
      >
        {children}
      </button>
    );
  }
}

Button.displayName = 'Button';

Button.contextTypes = {
  theme: PropTypes.object
};

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
