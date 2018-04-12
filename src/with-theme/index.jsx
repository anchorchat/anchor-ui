import React from 'react';
import ThemeContext from '../internal/theme-context';

// This function takes a component...
const withTheme = Component => (
  function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {color => <Component {...props} color={color} />}
      </ThemeContext.Consumer>
    );
  }
);

export default withTheme;
