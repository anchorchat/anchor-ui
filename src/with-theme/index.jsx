import React, { Component, PropTypes } from 'react';
import colors from '../settings/colors';

class WithTheme extends Component {
  static displayName = 'WithTheme'

  static propTypes = {
    /** Your theme's color */
    color: PropTypes.string,
    /** Children to apply theme color to  */
    children: PropTypes.node.isRequired
  }

  static defaultProps = {
    color: colors.theme
  }

  static childContextTypes = {
    color: PropTypes.string.isRequired
  }

  getChildContext() {
    return {
      color: this.props.color
    };
  }

  render() {
    return React.cloneElement(this.props.children, { ...this.props });
  }
}

export default WithTheme;
