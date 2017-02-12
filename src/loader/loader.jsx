import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import shallowEqual from 'recompose/shallowEqual';
import styles from '../style/loaders';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

function getStyle(themeColor, inverted, index, overrideStyle) {
  const color = themeColor || colors.theme;

  let style = {
    ...styles.dot,
    backgroundColor: color
  };

  if (index === 1) {
    style = {
      ...style,
      animationDelay: '.33s'
    };
  }

  if (index === 2) {
    style = {
      ...style,
      animationDelay: '.66s'
    };
  }

  if (inverted) {
    return combineStyles(combineStyles(style, styles.inverted), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

/**
 * Animated loader
 */
class Loader extends Component {
  static displayName = 'Loader'

  static propTypes = {
    /**
     * Override the styles of the root element
     */
    style: PropTypes.instanceOf(Object),
    /**
     * Override the styles of the dot element
     */
    dotStyle: PropTypes.instanceOf(Object),
    /**
     * Inverts the color
     */
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
    const { inverted, style, dotStyle } = this.props;
    const { color } = this.context;

    return (
      <div style={combineStyles(styles.loader, style)}>
        <span style={getStyle(color, inverted, 0, dotStyle)} />
        <span style={getStyle(color, inverted, 1, dotStyle)} />
        <span style={getStyle(color, inverted, 2, dotStyle)} />
      </div>
    );
  }
}

export default Radium(Loader);
