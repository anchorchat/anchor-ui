import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import shallowEqual from 'recompose/shallowEqual';
import appHeaderStyleSheet from '../style/app-header';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';

/**
 * Appheader styling
 */
class AppHeader extends Component {
  static propTypes = {
    /**
     * Title text (Name of the App)
     */
    text: PropTypes.node.isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    /**
     * Icon (Logo of the app)
     */
    icon: PropTypes.node,
    /**
     * Right-hand side placed button
     */
    rightButton: PropTypes.node,
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the text element
     */
    textStyle: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the icon element
     */
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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const { text, icon, rightButton, sheet: { classes } } = this.props;
    const { textClassName, headerClassName } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    return (
      <header className={headerClassName} style={{ backgroundColor }}>
        {icon ? <div className={classes.icon}>{icon}</div> : null}
        <h1 className={textClassName}>{text}</h1>
        {rightButton ? <div className={classes.button}>{rightButton}</div> : null}
      </header>
    );
  }
}

export default injectSheet(appHeaderStyleSheet)(AppHeader);
