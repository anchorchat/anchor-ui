import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const themeable = (ChildComponent) => {
  class ThemeableComponent extends Component {
    static contextTypes = {
      theme: PropTypes.object
    }

    constructor(props, context) {
      super(props, context);

      this.state = {
        color: this.context.theme.color
      };
    }

    componentDidMount() {
      this.unsubscribe = this.context.theme.subscribe(this.setColor);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    setColor = (color) => {
      this.setState({ color });
    };

    render() {
      return <ChildComponent {...this.props} color={this.state.color} />;
    }
  }

  return ThemeableComponent;
};

export default themeable;
