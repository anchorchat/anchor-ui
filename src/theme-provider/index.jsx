import { Component } from 'react';
import PropTypes from 'prop-types';
import forEach from 'lodash/forEach';
import filter from 'lodash/filter';
import colors from '../settings/colors';

class Theme {
  constructor(color) {
    this.color = color;
    this.subscriptions = [];
  }

  setColor = (color) => {
    this.color = color;
    forEach(this.subscriptions, func => func(color));
  }

  subscribe = (listener) => {
    this.subscriptions.push(listener);

    return () => { this.subscriptions = filter(this.subscriptions, item => item !== listener); };
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

export default ThemeProvider;
