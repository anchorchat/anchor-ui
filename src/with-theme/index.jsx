import { Component } from 'react';
import PropTypes from 'prop-types';
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
    return this.props.children;
  }
}

export default WithTheme;
