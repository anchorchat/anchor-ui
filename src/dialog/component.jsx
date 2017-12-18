import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import styles from './styles';
import Button from '../button';
import IconClose from '../icons/icon-close';
import colors from '../settings/colors';
import getStyles from './get-styles';
import Overlay from '../overlay';
import Portal from '../portal';

const displayName = 'Dialog';

const propTypes = {
  /** Header text */
  header: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the overlay element */
  overlayStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /**
   * Callback fired when the close button is clicked
   *
   * function(event: object) => void
   */
  hideDialog: PropTypes.func.isRequired,
  /** Optional children, will only render children and headerText with other styles */
  children: PropTypes.node,
  /** The close button's icon color */
  iconColor: PropTypes.string,
  /** Toggle the Dialogs visibility */
  open: PropTypes.bool,
  color: PropTypes.string.isRequired
};

const defaultProps = {
  style: {},
  overlayStyle: {},
  headerStyle: {},
  children: null,
  iconColor: colors.white,
  header: null,
  open: false
};

/** General purpose dialog */
class Dialog extends Component {
  handleKeyUp = (event) => {
    const { hideDialog } = this.props;

    if (event.which === 27) {
      hideDialog(event);
    }
  }

  render() {
    const {
      header,
      hideDialog,
      style,
      overlayStyle,
      headerStyle,
      children,
      iconColor,
      open,
      color,
      ...custom
    } = this.props;

    if (!open) {
      return null;
    }

    return (
      <Portal>
        <Overlay style={overlayStyle} onClick={hideDialog} >
          <section style={styles.clickAway} onClick={hideDialog} />
          <section style={getStyles.root(color, style)} {...custom}>
            <Button style={styles.closeButton} onClick={hideDialog} iconButton>
              <IconClose color={iconColor} />
            </Button>
            {header ? <h1 style={getStyles.header(headerStyle)}>{header}</h1> : null}
            {children}
          </section>
          <EventListener target="window" onKeyUp={this.handleKeyUp} />
        </Overlay>
      </Portal>
    );
  }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;
Dialog.displayName = displayName;

export default Dialog;
