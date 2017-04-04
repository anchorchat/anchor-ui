import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import getStyles from './get-styles';

/** Used for displaying an user's Admin status */
class AdminBadge extends Component {
  static displayName = 'AdminBadge'

  static propTypes = {
    /** The badge's text */
    text: PropTypes.string,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Inverts color */
    inverted: PropTypes.bool
  }

  static defaultProps = {
    style: {},
    inverted: false,
    text: 'Admin'
  }

  static contextTypes = {
    color: PropTypes.string
  }

  render() {
    const { text, inverted, style, ...custom } = this.props;
    const { color } = this.context;

    return (
      <span style={getStyles.root(color, inverted, style)} {...custom}>
        {text}
      </span>
    );
  }
}

export default Radium(AdminBadge);
