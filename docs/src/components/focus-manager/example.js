export default `
\`\`\`js
import focusManager from 'anchor-ui/focus-manager';
import MyComponent from './my-component';

export default focusManager()(MyComponent);

// with events
import focusManager from 'anchor-ui/focus-manager';
import MyComponent from './my-component';

export default focusManager(['onFocus', 'onBlur'])(MyComponent);

// with custom style
import focusManager from 'anchor-ui/focus-manager';
import MyComponent from './my-component';

const options = {
  style: {
    width: '100%',
    height: '100%'
  }
};

export default focusManager([], options)(MyComponent);
\`\`\`
`;
