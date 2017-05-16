import { Component } from 'react';
import { PropTypes } from 'prop-types';

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
  }
}

export default ThemeableComponent;
