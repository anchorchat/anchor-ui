import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import buttonStyleSheet from '../style/buttons';
import getClassNames from '../internal/get-class-names';

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

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const iconButtonClassName = getClassNames(classes, style, 'iconButton', 'Button');
    const buttonClassName = getClassNames(classes, style, 'button', 'Button');

    this.state = {
      iconButtonClassName,
      buttonClassName
    };
  }

  render() {
    const { children, onClick, iconButton } = this.props;
    const { iconButtonClassName, buttonClassName } = this.state;

    return (
      <button
        onClick={onClick}
        className={
          classNames({
            [iconButtonClassName]: iconButton,
            [buttonClassName]: !iconButton
          })
        }
      >
        {children}
      </button>
    );
  }
}

export default injectSheet(buttonStyleSheet)(Button);
