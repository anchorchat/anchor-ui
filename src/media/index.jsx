import { Component } from 'react';
import PropTypes from 'prop-types';
import isObject from 'lodash/isObject';

const propTypes = {
  /**
  * Media query to listen for, must be a valid CSS Media query
  */
  query: PropTypes.string.isRequired,
  /**
   * Callback fired when the window resizes, is also fired on mount
   *
   * function(query: string, matches: boolean) => void
   */
  onChange: PropTypes.func.isRequired
};

const displayName = 'Media';

/** CSS media query component, listens to matches for a given query */
class Media extends Component {
  componentDidMount() {
    if (!isObject(window)) {
      return false;
    }

    const { query } = this.props;

    this.mediaQueryList = window.matchMedia(query);
    this.mediaQueryList.addListener(this.updateMatches);

    return this.updateMatches();
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateMatches);
  }

  updateMatches = () => {
    const { onChange, query } = this.props;

    onChange(query, this.mediaQueryList.matches);
  }

  render() {
    return null;
  }
}

Media.propTypes = propTypes;
Media.displayName = displayName;

export default Media;
