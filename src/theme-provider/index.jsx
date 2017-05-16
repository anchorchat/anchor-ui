import { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import colors from '../settings/colors';

class Theme {
  constructor(color) {
    this.color = color;
    this.subscriptions = [];
  }

  setColor(color) {
    this.color = color;
    this.subscriptions.forEach(func => func(color));
  }

  subscribe(func) {
    this.subscriptions.push(func);
  }
}

class ThemeProvider extends Component {
  static displayName = 'ThemeProvider'

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
    theme: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.theme = new Theme(props.color);
  }

  getChildContext() {
    return {
      theme: this.theme
    };
  }

  componentWillReceiveProps(nextProps) {
    this.theme.setColor(nextProps.color);
  }

  render() {
    return this.props.children;
  }
}

export default pure(ThemeProvider);
