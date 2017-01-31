import React, { Component, PropTypes } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import popUpStyleSheet from '../style/pop-ups';
import getClassNames from '../internal/get-class-names';
import colors from '../style/colors';
import Button from './button';
import IconClose from '../icons/icon-close';

class Dialog extends Component {
  static propTypes = {
    headerText: PropTypes.node.isRequired,
    bodyText: PropTypes.node.isRequired,
    button: PropTypes.node,
    image: PropTypes.node,
    sheet: PropTypes.shape({
      classes: PropTypes.shape({
        overlay: PropTypes.string.isRequired,
        popUp: PropTypes.string.isRequired,
        headerText: PropTypes.string.isRequired,
        bodyText: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        clickAway: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    style: PropTypes.instanceOf(Object),
    overlayStyle: PropTypes.instanceOf(Object),
    headerStyle: PropTypes.instanceOf(Object),
    bodyStyle: PropTypes.instanceOf(Object),
    hideDialog: PropTypes.func.isRequired
  }

  static defaultProps = {
    button: null,
    image: null,
    background: '',
    style: {},
    overlayStyle: {},
    headerStyle: {},
    bodyStyle: {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    const { sheet: { classes }, style, overlayStyle, headerStyle, bodyStyle } = props;

    const className = getClassNames(classes, style, 'popUp', 'Dialog');
    const overlayClassName = getClassNames(classes, overlayStyle, 'overlay', 'Dialog');
    const headerClassName = getClassNames(classes, headerStyle, 'headerText', 'Dialog');
    const bodyClassName = getClassNames(classes, bodyStyle, 'bodyText', 'Dialog');

    this.state = {
      className,
      overlayClassName,
      headerClassName,
      bodyClassName
    };
  }

  render() {
    const { headerText, bodyText, button, image, hideDialog, sheet: { classes } } = this.props;
    const { className, overlayClassName, headerClassName, bodyClassName } = this.state;
    const { color } = this.context;
    const backgroundColor = color || colors.theme;

    const style = {
      position: 'absolute',
      top: '5px',
      right: '5px'
    };

    return (
      <section className={overlayClassName}>
        <section className={classes.clickAway} onClick={hideDialog} />
        <section className={className} style={{ backgroundColor }}>
          <Button style={style} onClick={hideDialog} iconButton>
            <IconClose color={colors.white} />
          </Button>
          {image}
          <h1 className={classNames(headerClassName, { [classes.image]: image })}>
            {headerText}
          </h1>
          <p className={classNames(bodyClassName, { [classes.button]: button })}>
            {bodyText}
          </p>
          {button}
        </section>
      </section>
    );
  }
}

export default injectSheet(popUpStyleSheet)(Dialog);
