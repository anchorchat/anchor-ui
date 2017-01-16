import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import appHeaderStyleSheet from '../style/app-header';
import getClassNames from '../internal/get-class-names';

class AppHeader extends Component {
  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node
    ]).isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    icon: PropTypes.node,
    rightButton: PropTypes.node,
    style: PropTypes.instanceOf(Object),
    textStyle: PropTypes.instanceOf(Object),
    iconStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
    textStyle: {},
    iconStyle: {},
    icon: null,
    rightButton: null
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, textStyle, iconStyle } = props;

    const headerClassName = getClassNames(classes, style, 'header', 'AppHeader');
    const textClassName = getClassNames(classes, textStyle, 'text', 'AppHeader');
    const iconClassName = getClassNames(classes, iconStyle, 'icon', 'AppHeader');

    this.state = {
      textClassName,
      headerClassName,
      iconClassName
    };
  }

  render() {
    const { text, icon, rightButton, sheet: { classes } } = this.props;
    const { textClassName, headerClassName } = this.state;

    return (
      <header className={headerClassName}>
        {icon}
        <h1 className={textClassName}>{text}</h1>
        {rightButton ? <div className={classes.button}>{rightButton}</div> : null}
      </header>
    );
  }
}

export default injectSheet(appHeaderStyleSheet)(AppHeader);
