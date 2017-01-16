import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import buttonStyleSheet from '../style/buttons';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';

class Button extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        iconButton: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    iconButton: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    iconButton: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'button', 'Button');
    const iconButtonClassName = getClassNames(classes, style, 'iconButton', 'Button');

    this.state = {
      className,
      iconButtonClassName
    };
  }

  render() {
    const { children, onClick, iconButton } = this.props;
    const { iconButtonClassName, className } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    return (
      <button
        onClick={onClick}
        className={classNames({ [className]: !iconButton, [iconButtonClassName]: iconButton })}
        style={!iconButton ? { backgroundColor } : {}}
      >
        {children}
      </button>
    );
  }
}

export default injectSheet(buttonStyleSheet)(Button);
