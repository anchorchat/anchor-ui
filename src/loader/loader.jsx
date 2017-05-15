import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import styles from './styles';
import getStyles from './get-styles';
import combineStyles from '../internal/combine-styles';

/** Animated loader */
class Loader extends Component {
  static displayName = 'Loader'

  static propTypes = {
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the dot element */
    dotStyle: PropTypes.instanceOf(Object),
    /** Inverts the color */
    inverted: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    dotStyle: {},
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
    const { inverted, style, dotStyle, ...custom } = this.props;
    const { color } = this.context;

    return (
      <div style={combineStyles(styles.loader, style)} {...custom}>
        <span style={getStyles.root(color, inverted, 0, dotStyle)} />
        <span style={getStyles.root(color, inverted, 1, dotStyle)} />
        <span style={getStyles.root(color, inverted, 2, dotStyle)} />
      </div>
    );
  }
}

export default Radium(Loader);
