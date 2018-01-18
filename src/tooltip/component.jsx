import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import PopOver from '../pop-over';
import getStyles from './get-styles';
import getPopOverPosition from '../internal/get-pop-over-position';

const displayName = 'Tooltip';

const propTypes = {
  /** Icon to toggle the menu with */
  icon: PropTypes.node.isRequired,
  /** Tooltip's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the content container */
  contentStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Callback fired when the Tooltip closes
   *
   * function(event: object) => void
   */
  onTooltipClose: PropTypes.func,
  /** Override the styles of the icon element */
  iconStyle: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  style: {},
  contentStyle: {},
  onTooltipClose: () => {},
  iconStyle: {}
};

/** Open a Tooltip from an Icon */
class Tooltip extends Component {
  state = {
    open: false,
    positioned: false
  }

  componentDidUpdate() {
    const { open, positioned } = this.state;

    if (open && !positioned) {
      this.positionPopOver();
    }
  }

  positionPopOver = () => {
    const button = this.button.getBoundingClientRect();
    const popOver = this.popOver.getBoundingClientRect();

    this.setState({
      positioned: true,
      position: getPopOverPosition(button, popOver, 'tooltip')
    });
  }

  openTooltip = () => {
    this.setState({
      open: true
    });
  }

  closeTooltip = (event) => {
    const { onTooltipClose } = this.props;
    const { open } = this.state;

    if (!open) {
      return false;
    }

    this.setState({
      open: false,
      positioned: false
    });

    return onTooltipClose(event);
  }

  handleClickOutside = event => this.closeTooltip(event)

  handleKeyUp = (event) => {
    if (event.which === 27) {
      this.closeTooltip();
    }
  }

  render() {
    const {
      children,
      icon,
      style,
      contentStyle,
      onTooltipClose,
      eventTypes, // eslint-disable-line react/prop-types
      outsideClickIgnoreClass, // eslint-disable-line react/prop-types
      preventDefault, // eslint-disable-line react/prop-types
      stopPropagation, // eslint-disable-line react/prop-types
      disableOnClickOutside, // eslint-disable-line react/prop-types
      enableOnClickOutside, // eslint-disable-line react/prop-types
      iconStyle,
      ...custom
    } = this.props;
    const { open, position } = this.state;

    return (
      <div style={getStyles.root(style)} {...custom}>
        {
          open
          ? <EventListener
            target="window"
            onResize={this.closeTooltip}
            onKeyUp={this.handleKeyUp}
          />
          : null
        }
        <div
          ref={(node) => { this.button = node; }}
          onMouseEnter={this.openTooltip}
          onMouseLeave={this.closeTooltip}
          style={iconStyle}
        >
          {icon}
        </div>
        <PopOver
          style={contentStyle}
          open={open}
          popOverRef={(popOver) => { this.popOver = popOver; }}
          position={position}
        >
          {children}
        </PopOver>
      </div>
    );
  }
}

Tooltip.displayName = displayName;
Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
