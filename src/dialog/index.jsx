import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import EventListener from 'react-event-listener';
import styles from './styles';
import Button from '../button';
import IconClose from '../icons/icon-close';
import colors from '../settings/colors';
import getStyles from './get-styles';
import Overlay from '../overlay';
import themeable from '../themeable';

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
      <Overlay style={overlayStyle}>
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
    );
  }
}

Dialog.displayName = 'Dialog';

Dialog.propTypes = {
  /** Header text */
  header: PropTypes.node,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the overlay element */
  overlayStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the header element */
  headerStyle: PropTypes.instanceOf(Object),
  /** Function to hide dialog element */
  hideDialog: PropTypes.func.isRequired,
  /** Optional children, will only render children and headerText with other styles */
  children: PropTypes.node,
  /** The close button's icon color */
  iconColor: PropTypes.string,
  /** Toggle the Dialogs visibility */
  open: PropTypes.bool,
  color: PropTypes.string.isRequired
};

Dialog.defaultProps = {
  style: {},
  overlayStyle: {},
  headerStyle: {},
  children: null,
  iconColor: colors.white,
  header: null,
  open: false
};

const enhance = compose(
  themeable(),
  Radium,
  pure
);

export default enhance(Dialog);
