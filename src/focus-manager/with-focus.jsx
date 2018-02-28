import React from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import FocusManager from './component';

const withFocus = (events = [], options = {}) => (ChildComponent) => {
  const C = props => (
    <FocusManager
      events={events}
      options={options}
      render={focused => <ChildComponent {...props} focused={focused} />
      }
    />
  );

  C.displayName = wrapDisplayName(ChildComponent, 'withFocus');
  C.WrappedComponent = ChildComponent;

  return C;
};

export default withFocus;
