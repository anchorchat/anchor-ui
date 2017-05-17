import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const themeable = options => ChildComponent => (
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
      const propName = (options && options.propName) || 'color';
      const customPropName = { [propName]: this.state.color };
      const combinedProps = { ...this.props, ...customPropName };

      return <ChildComponent {...combinedProps} />;
    }
  }
);

export default themeable;
