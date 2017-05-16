import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Radium from 'radium';
import compose from 'recompose/compose';
import getStyles from './get-styles';
import themeable from '../internal/themeable';

/** Used for displaying an user's Admin status */
class AdminBadge extends Component {
  static displayName = 'AdminBadge'

  static propTypes = {
    /** The badge's text */
    text: PropTypes.node,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Inverts color */
    inverted: PropTypes.bool,
    color: PropTypes.string.isRequired
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
    const { text, inverted, style, color, ...custom } = this.props;

    return (
      <span style={getStyles.root(color, inverted, style)} {...custom}>
        {text}
      </span>
    );
  }
}

const enhance = compose(
  themeable,
  Radium,
  pure
);

export default enhance(AdminBadge);
