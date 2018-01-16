import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import PopOver from '../pop-over';
import Button from '../button';
import getStyles from './get-styles';
import getPopOverPosition from '../internal/get-pop-over-position';

const displayName = 'Tooltip';

const propTypes = {
  /** Icon to toggle the menu with */
  icon: PropTypes.node.isRequired,
  /** Tooltip's content */
  children: PropTypes.node.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the content container */
  contentStyle: PropTypes.instanceOf(Object),
  /**
   * Callback fired when the Tooltip closes
   *
   * function(event: object) => void
   */
  onTooltipClose: PropTypes.func,
  /** Override the styles of the Button component */
  buttonStyle: PropTypes.instanceOf(Object)
};

const defaultProps = {
  style: {},
  contentStyle: {},
  onTooltipClose: () => {},
  buttonStyle: {}
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
      position: getPopOverPosition(button, popOver)
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
      buttonStyle,
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
        <div ref={(button) => { this.button = button; }}>
          <Button
            style={buttonStyle}
            iconButton
            onMouseEnter={this.openTooltip}
            onMouseLeave={this.closeTooltip}
          >
            {icon}
          </Button>
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
