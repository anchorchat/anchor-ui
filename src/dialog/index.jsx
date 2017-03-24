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

function getHeadingStyle(style, overrideStyle) {
  return combineStyles(style, overrideStyle);
}

/** General purpose dialog */
class Dialog extends Component {
  static displayName = 'Dialog'

  static propTypes = {
    /** Header text */
    headerText: PropTypes.node.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the overlay element */
    overlayStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headingStyle: PropTypes.instanceOf(Object),
    /** Function to hide dialog element */
    hideDialog: PropTypes.func.isRequired,
    /** Optional children, will only render children and headerText with other styles */
    children: PropTypes.node
  }

  static defaultProps = {
    style: {},
    overlayStyle: {},
    headingStyle: {},
    children: null
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
      hideDialog,
      style,
      overlayStyle,
      headingStyle,
      children,
      ...custom
    } = this.props;
    const { color } = this.context;

    return (
      <section style={combineStyles(styles.overlay, overlayStyle)} {...custom}>
        <section style={styles.clickAway} onClick={hideDialog} />
        <section style={getStyle(color, style)}>
          <Button style={styles.closeButton} onClick={hideDialog} iconButton>
            <IconClose />
          </Button>
          <h1 style={getHeadingStyle(styles.modalHeading, headingStyle)}>
            {headerText}
          </h1>
          {children}
        </section>
      </section>
    );
  }
}

export default Radium(Dialog);
