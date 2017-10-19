import { Component } from 'react';
import PropTypes from 'prop-types';
import isObject from 'lodash/isObject';
import forEach from 'lodash/forEach';
import mapValues from 'lodash/mapValues';

const propTypes = {
  /** Media query to listen for, must be an object of valid CSS Media queries */
  query: PropTypes.objectOf(PropTypes.string).isRequired,
  /**
   * Callback fired when the window resizes, is also fired on mount
   *
   * function(matches: object) => void
   */
  onChange: PropTypes.func.isRequired
};

const displayName = 'Media';

/** CSS media query component, listens to matches for given queries */
class Media extends Component {
  constructor() {
    super();

    this.mediaQueryList = {};
  }

  componentDidMount() {
    if (!isObject(window)) {
      return false;
    }

    const { query } = this.props;

    forEach(query, (value, key) => {
      this.mediaQueryList[key] = window.matchMedia(value);
      this.mediaQueryList[key].addListener(this.updateMatches);
    });

    return this.updateMatches();
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateMatches);
  }

  updateMatches = () => {
    const { onChange } = this.props;

    const matches = mapValues(this.mediaQueryList, 'matches');

    onChange(matches);
  }

  render() {
    return null;
  }
}

Media.propTypes = propTypes;
Media.displayName = displayName;

export default Media;
