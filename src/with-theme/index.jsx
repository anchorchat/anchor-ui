import { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
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
    theme: PropTypes.shape({
      color: PropTypes.string
    })
  }

  // Allow backwards compatibility (sort of)
  getChildContext() {
    return {
      theme: {
        color: this.props.color,
        subscribe: () => () => {}
      }
    };
  }

  render() {
    return this.props.children;
  }
}

export default pure(WithTheme);
