import { Component, PropTypes } from 'react';
import colors from '../style/colors';

class Theme extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string
  }

  static defaultProps = {
    color: colors.theme
  }

  static childContextTypes = {
    color: PropTypes.string.isRequired
  }

  getChildContext() {
    return {
      color: this.props.color,
    };
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

export default Theme;
