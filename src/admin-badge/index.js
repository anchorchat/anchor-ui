import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import styles from '../style/badges';
import colors from '../settings/colors';
import combineStyles from '../internal/combine-styles';

function getStyle(themeColor, inverted, overrideStyle) {
  const color = themeColor || colors.theme;

  const style = combineStyles(styles.badge, { backgroundColor: color });
  const invertedStyle = combineStyles(styles.inverted, { color });

  if (inverted) {
    return combineStyles(combineStyles(style, invertedStyle), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

/** Used for displaying a notification with text */
class AdminBadge extends Component {
  static displayName = 'AdminBadge'

  static propTypes = {
    /** custom value */
    value: PropTypes.string.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Inverts color */
    inverted: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    inverted: false
  }

  static contextTypes = {
    color: PropTypes.string
  }

  render() {
    const { value, inverted, style, ...custom } = this.props;
    const { color } = this.context;

    let content = 'admin';

    if (value !== '') {
      content = value;
    }

    return (
      <span style={getStyle(color, inverted, style)} {...custom}>
        {content}
      </span>
    );
  }
}

export default Radium(AdminBadge);
