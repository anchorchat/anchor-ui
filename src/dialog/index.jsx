import React, { Component, PropTypes } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import styles from './styles';
import colors from '../settings/colors';
import Button from '../button';
import IconClose from '../icons/icon-close';
import combineStyles from '../internal/combine-styles';

function getStyle(themeColor, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = combineStyles(styles.modal, { background: color });

  return combineStyles(style, overrideStyle);
}

function getHeadingStyle(style, image, overrideStyle) {
  if (image) {
    return combineStyles(combineStyles(style, styles.image), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

function getBodyStyle(style, button, overrideStyle) {
  if (button) {
    return combineStyles(combineStyles(style, styles.button), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

/** General purpose dialog */
class Dialog extends Component {
  static displayName = 'Dialog'

  static propTypes = {
    /** Header text */
    headerText: PropTypes.node.isRequired,
    /** Body text */
    bodyText: PropTypes.node,
    /** Render a call to action button */
    button: PropTypes.node,
    /** An image to render in the dialog */
    image: PropTypes.node,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the overlay element */
    overlayStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headingStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the body element */
    bodyStyle: PropTypes.instanceOf(Object),
    /** Function to hide dialog element */
    hideDialog: PropTypes.func.isRequired,
    /** Optional children, will only render children and headerText with other styles */
    children: PropTypes.node
  }

  static defaultProps = {
    button: null,
    image: null,
    style: {},
    overlayStyle: {},
    headingStyle: {},
    bodyStyle: {},
    children: null,
    bodyText: null
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const {
      headerText,
      bodyText,
      button,
      image,
      hideDialog,
      style,
      overlayStyle,
      headingStyle,
      bodyStyle,
      children
    } = this.props;
    const { color } = this.context;

    let dialog = (
      <section style={getStyle(color, style)}>
        <Button style={styles.closeButton} onClick={hideDialog} iconButton>
          <IconClose color={colors.white} />
        </Button>
        {image}
        <h1 style={getHeadingStyle(styles.modalHeading, image, headingStyle)}>
          {headerText}
        </h1>
        <p style={getBodyStyle(styles.bodyText, button, bodyStyle)}>
          {bodyText}
        </p>
        {button}
      </section>
    );

    if (children) {
      dialog = (
        <section style={combineStyles(styles.dialog, style)}>
          <Button style={styles.closeButton} onClick={hideDialog} iconButton>
            <IconClose />
          </Button>
          <h1 style={combineStyles(styles.dialogHeading, headingStyle)}>
            {headerText}
          </h1>
          {children}
        </section>
      );
    }

    return (
      <section style={combineStyles(styles.overlay, overlayStyle)}>
        <section style={styles.clickAway} onClick={hideDialog} />
        {dialog}
      </section>
    );
  }
}

export default Radium(Dialog);
