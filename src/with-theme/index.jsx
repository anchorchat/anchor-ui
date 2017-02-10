import React, { Component, PropTypes } from 'react';
import colors from '../settings/colors';

function withTheme(ChildComponent, color) {
  class Theme extends Component {
    static childContextTypes = {
      color: PropTypes.string.isRequired
    }

    getChildContext() {
      return {
        color: color || colors.theme
      };
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return Theme;
}

withTheme.displayName = 'withTheme';

export default withTheme;
