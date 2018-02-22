import React, { Component } from 'react';
import shallowEqual from 'recompose/shallowEqual';
import wrapDisplayName from 'recompose/wrapDisplayName';
import pick from 'lodash/pick';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

const focusManager = (events = [], options = {}) => (ChildComponent) => {
  class FocusManager extends Component {
    state = {
      focused: false
    }

    shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }

    getEvents = () => {
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
      const style = get(options, 'style', {});

      return (
        <div
          role="presentation"
          style={style}
          {...this.getEvents()}
        >
          <ChildComponent focused={this.state.focused} {...this.props} />
        </div>
      );
    }
  }

  FocusManager.displayName = wrapDisplayName(ChildComponent, 'FocusManager');

  return FocusManager;
};

export default focusManager;
