import React, { forwardRef } from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import ThemeContext from '../internal/theme-context';

const withTheme = (Component) => {
  const ThemedComponent = (props) => {
    const { forwardedRef, ...rest } = props;
    console.log(typeof forwardedRef);

    return (
      <ThemeContext.Consumer>
        {color => <Component ref={forwardedRef} {...rest} color={color} />}
      </ThemeContext.Consumer>
    );
  };

  ThemedComponent.displayName = wrapDisplayName(Component, 'withTheme');

  return forwardRef((props, ref) => (
    <ThemedComponent {...props} forwardedRef={ref} />
  ));
};

export default withTheme;
