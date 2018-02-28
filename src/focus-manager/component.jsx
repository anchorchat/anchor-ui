import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import pick from 'lodash/pick';

const propTypes = {
  /** List of events to include in focus checking */
  events: PropTypes.arrayOf(PropTypes.string),
  /** Option object for defining style */
  options: PropTypes.shape({
    style: PropTypes.object
  }),
  /** Render function */
  render: PropTypes.func, // eslint-disable-line react/require-default-props
  /** Render function through children prop */
  children: PropTypes.func, // eslint-disable-line react/require-default-props
};

const defaultProps = {
  events: [],
  options: {}
};

class FocusManager extends Component {
  state = {
    events: {},
    focused: false
  }

  componentDidMount() {
    this.setState({
      events: this.getEvents()
    });
  }

  getEvents = () => {
    const { events } = this.props;

    const defaults = {
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onClick: this.handleFocus,
      onMouseEnter: this.handleFocus,
      onMouseLeave: this.handleBlur,
      onMouseOut: this.handleBlur,
      onMouseOver: this.handleFocus
    };

    if (isEmpty(events)) {
      return defaults;
    }

    return pick(defaults, events);
  }

  handleFocus = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    if (!this.state.focused) {
      this.setState({
        focused: true
      });
    }
  }

  handleBlur = () => {
    this.timeout = setTimeout(() => {
      if (this.state.focused) {
        this.setState({
          focused: false
        });
      }
    }, 0);
  }

  render() {
    const { options, render, children } = this.props;
    const { events, focused } = this.state;

    const style = get(options, 'style') || {};

    return (
      <div
        role="presentation"
        style={style}
        {...events}
      >
        {
          render
            ? render(focused)
            : children(focused)
        }
      </div>
    );
  }
}

FocusManager.propTypes = propTypes;
FocusManager.defaultProps = defaultProps;
FocusManager.displayName = 'FocusManager';

export default FocusManager;
