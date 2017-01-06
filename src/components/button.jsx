import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import buttonStyleSheet from '../style/buttons';
import getClassNames from '../internal/get-class-names';

class Button extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        button: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object)
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style } = props;
    const className = getClassNames(classes, style, 'button', 'Button');

    this.state = {
      className
    };
  }

  render() {
    const { children, onClick } = this.props;
    const { className } = this.state;

    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
}

export default injectSheet(buttonStyleSheet)(Button);
