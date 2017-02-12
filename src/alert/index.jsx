import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import Radium from 'radium';
import styles from '../style/alerts';
import IconSuccess from '../icons/icon-success';
import IconError from '../icons/icon-error';
import IconWarning from '../icons/icon-warning';
import IconInfo from '../icons/icon-info';
import IconClose from '../icons/icon-close';
import Button from '../button';
import { colors } from '../settings';
import darken from '../internal/darken';
import combineStyles from '../internal/combine-styles';

const icons = {
  success: <IconSuccess color={darken(colors.alert.success, 0.65)} />,
  error: <IconError color={darken(colors.alert.error, 0.65)} />,
  warning: <IconWarning color={darken(colors.alert.warning, 0.65)} />,
  info: <IconInfo color={darken(colors.alert.info, 0.65)} />
};

/**
 * Four types of (system) messages for alerting your user
 */
function Alert({ text, hideAlert, type, style, iconStyle, textStyle, buttonStyle }) {
  return (
    <section style={combineStyles(combineStyles(styles.alert, styles[type]), style)}>
      <div style={combineStyles(styles.icon, iconStyle)}>{icons[type]}</div>
      <p style={combineStyles(styles.text, textStyle)}>{text}</p>
      <Button iconButton onClick={hideAlert} style={combineStyles(styles.button, buttonStyle)}>
        <IconClose color={darken(colors.alert[type], 0.65)} />
      </Button>
    </section>
  );
}

Alert.displayName = 'Alert';

Alert.propTypes = {
  /**
   * Text to display
   */
  text: PropTypes.node.isRequired,
  /**
   * Type of alert. One of the following: ["info", "success", "warning", "error"]
   */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  /**
   * Override the styles of the root element
   */
  style: PropTypes.instanceOf(Object),
  /**
   * Override the styles of the icon element
   */
  iconStyle: PropTypes.instanceOf(Object),
  /**
   * Override the styles of the text element
   */
  textStyle: PropTypes.instanceOf(Object),
  /**
   * Override the styles of the button element
   */
  buttonStyle: PropTypes.instanceOf(Object),
  /**
   * Function to hide the alert
   */
  hideAlert: PropTypes.func.isRequired
};

Alert.defaultProps = {
  style: {},
  iconStyle: {},
  textStyle: {},
  buttonStyle: {}
};

export default pure(Radium(Alert));
