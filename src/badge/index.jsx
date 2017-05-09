import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'recompose/shallowEqual';
import Radium from 'radium';
import getStyles from './get-styles';

/** Used for displaying a (notification) counter */
class Badge extends Component {
  static displayName = 'Badge'

  static propTypes = {
    /** The badge's value */
    value: PropTypes.number.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Inverts color */
    inverted: PropTypes.bool,
    /** Maximum value that will be shown.
     * This will result in `${maxValue}+` if value exceeds maxValue */
    maxValue: PropTypes.number.isRequired
  }

  static defaultProps = {
    style: {},
    inverted: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.context, nextContext)
    );
  }

  render() {
    const { value, maxValue, inverted, style, ...custom } = this.props;
    const { color } = this.context;

    let content = value;

    if (value > maxValue) {
      content = `${maxValue}+`;
    }

    return (
      <span style={getStyles.root(color, inverted, style)} {...custom}>
        {content}
      </span>
    );
  }
}

export default Radium(Badge);
