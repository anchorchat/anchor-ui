import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import shallowEqual from 'recompose/shallowEqual';
import alertStyleSheet from '../style/alerts';
import getClassNames from '../internal/get-class-names';
import IconSuccess from '../icons/icon-success';
import IconError from '../icons/icon-error';
import IconWarning from '../icons/icon-warning';
import IconInfo from '../icons/icon-info';
import IconClose from '../icons/icon-close';
import Button from './button';
import colors from '../style/colors';
import darken from '../internal/darken';

const icons = {
  success: <IconSuccess color={darken(colors.alert.success, 0.65)} />,
  error: <IconError color={darken(colors.alert.error, 0.65)} />,
  warning: <IconWarning color={darken(colors.alert.warning, 0.65)} />,
  info: <IconInfo color={darken(colors.alert.info, 0.65)} />
};

class Alert extends Component {
  static propTypes = {
    text: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        alert: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        success: PropTypes.string.isRequired,
        error: PropTypes.string.isRequired,
        warning: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    iconStyle: PropTypes.instanceOf(Object),
    textStyle: PropTypes.instanceOf(Object),
    buttonStyle: PropTypes.instanceOf(Object),
    hideAlert: PropTypes.func.isRequired
  }

  static defaultProps = {
    style: {},
    secondaryText: '',
    iconStyle: {},
    textStyle: {},
    buttonStyle: {},
    onClick: null,
    active: false,
    rightButton: null
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, iconStyle, textStyle, buttonStyle } = props;

    const className = getClassNames(classes, style, 'alert', 'Alert');
    const iconClassName = getClassNames(classes, iconStyle, 'icon', 'Alert');
    const textClassName = getClassNames(classes, textStyle, 'text', 'Alert');
    const buttonClassName = getClassNames(classes, buttonStyle, 'button', 'Alert');

    this.state = {
      className,
      iconClassName,
      textClassName,
      buttonClassName
    };
  }

  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(this.props, nextProps));
  }

  render() {
    const { text, hideAlert, type, sheet: { classes } } = this.props;
    const { className, iconClassName, textClassName, buttonClassName } = this.state;

    return (
      <section className={classNames(className, classes[type])}>
        <div className={iconClassName}>{icons[type]}</div>
        <p className={textClassName}>{text}</p>
        <div className={buttonClassName}>
          <Button iconButton onClick={hideAlert}>
            <IconClose color={darken(colors.alert[type], 0.65)} />
          </Button>
        </div>
      </section>
    );
  }
}

export default injectSheet(alertStyleSheet)(Alert);
