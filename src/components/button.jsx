import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import buttonStyleSheet from '../style/buttons';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';
import darken from '../internal/darken';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        iconButton: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    iconButton: PropTypes.bool,
    inverted: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    iconButton: false,
    inverted: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);

    const { sheet: { classes }, style } = props;
    const { color } = context;

    const themeStyle = {
      button: {
        backgroundColor: color,
        '&:hover': {
          backgroundColor: darken(color, 0.15)
        },
        '&:active': {
          backgroundColor: darken(color, 0.25)
        }
      },
      inverted: {
        color,
        backgroundColor: colors.white,
        '&:hover': {
          backgroundColor: darken(colors.white, 0.15)
        },
        '&:active': {
          backgroundColor: darken(colors.white, 0.25)
        }
      }
    };

    const className = getClassNames(classes, style, 'button', 'Button');
    const iconButtonClassName = getClassNames(classes, style, 'iconButton', 'Button');
    const themeClassName = getClassNames(classes, themeStyle.button, 'theme', 'Button');
    const invertedClassName = getClassNames(classes, themeStyle.inverted, 'theme', 'Button');

    this.state = {
      className,
      iconButtonClassName,
      themeClassName,
      invertedClassName
    };
  }

  render() {
    const { children, onClick, iconButton, inverted } = this.props;
    const { iconButtonClassName, className, themeClassName, invertedClassName } = this.state;

    return (
      <button
        onClick={onClick}
        className={
          classNames({
            [className]: !iconButton,
            [iconButtonClassName]: iconButton,
            [themeClassName]: !iconButton,
            [invertedClassName]: inverted
          })
        }
      >
        {children}
      </button>
    );
  }
}

export default injectSheet(buttonStyleSheet)(Button);
