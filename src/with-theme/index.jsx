import React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import ThemeContext from '../internal/theme-context';

const withTheme = (Component) => {
  const ThemedComponent = props => (
    <ThemeContext.Consumer>
      {color => <Component {...props} color={color} />}
    </ThemeContext.Consumer>
  );

  ThemedComponent.displayName = wrapDisplayName(Component, 'withTheme');

  return ThemedComponent;
};

export default withTheme;
