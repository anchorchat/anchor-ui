import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import appHeaderStyleSheet from '../style/app-header';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';

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
        text: PropTypes.string.isRequired
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

  static contextTypes = {
    color: PropTypes.string
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
    const { text, icon, rightButton } = this.props;
    const { textClassName, headerClassName } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    return (
      <header className={headerClassName} style={{ backgroundColor }}>
        {icon}
        <h1 className={textClassName}>{text}</h1>
        {rightButton}
      </header>
    );
  }
}

export default injectSheet(appHeaderStyleSheet)(AppHeader);
