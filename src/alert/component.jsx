import React from 'react';
import PropTypes from 'prop-types';
import getStyles from './get-styles';
import IconSuccess from '../icons/icon-success';
import IconError from '../icons/icon-error';
import IconWarning from '../icons/icon-warning';
import IconInfo from '../icons/icon-info';
import IconClose from '../icons/icon-close';
import Button from '../button';
import colors from '../settings/colors';
import darken from '../internal/darken';

const displayName = 'Alert';

const propTypes = {
  /** Text to display */
  text: PropTypes.node.isRequired,
  /** Type of alert. One of the following: ["info", "success", "warning", "error"] */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the icon element */
  iconStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the text element */
  textStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the button element */
  buttonStyle: PropTypes.instanceOf(Object),
  /**
   * Callback fired when the close button is clicked
   *
   * function(event: object) => void
   */
  hideAlert: PropTypes.func
};

const defaultProps = {
  style: {},
  iconStyle: {},
  textStyle: {},
  buttonStyle: {},
  hideAlert: null
};

const icons = {
  success: <IconSuccess color={darken(colors.alert.success, 0.65)} />,
  error: <IconError color={darken(colors.alert.error, 0.65)} />,
  warning: <IconWarning color={darken(colors.alert.warning, 0.65)} />,
  info: <IconInfo color={darken(colors.alert.info, 0.65)} />
};

/** Four types of (system) messages for alerting your user */
const Alert = ({
  text, hideAlert, type, style, iconStyle, textStyle, buttonStyle, ...custom
}) => (
  <section style={getStyles.root(type, style)} {...custom}>
    <div style={getStyles.icon(iconStyle)}>{icons[type]}</div>
    <p style={getStyles.text(textStyle)}>{text}</p>
    {
      hideAlert
      ? (
        <Button iconButton onClick={hideAlert} style={getStyles.button(buttonStyle)}>
          <IconClose color={darken(colors.alert[type], 0.65)} />
        </Button>
      )
      : null
    }
  </section>
);

Alert.displayName = displayName;
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
