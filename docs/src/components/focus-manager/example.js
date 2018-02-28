export default `
\`\`\`js
// with render prop
import FocusManager from 'anchor-ui/focus-manager';

export default class extends React.Component {
  render() {
    <div style={{ height: '100%' }}>
      <FocusManager render={(focused) => (
        <p>I am {focused ? 'focused' : 'not focused'}</p>
      )} />
    </div>
  }
}

// with children prop
import FocusManager from 'anchor-ui/focus-manager';

export default class extends React.Component {
  render() {
    <div style={{ height: '100%' }}>
      <FocusManager>
        {(focused) => (
          <p>I am {focused ? 'focused' : 'not focused'}</p>
        )}
      </FocusManager>
    </div>
  }
}

// as HOC
import { withFocus } from 'anchor-ui/focus-manager';
import MyComponent from './my-component';

export default withFocus()(MyComponent);

// as HOC with focus events
import { withFocus } from 'anchor-ui/focus-manager';
import MyComponent from './my-component';

export default withFocus(['onFocus', 'onBlur'])(MyComponent);

// as HOC with custom styles
import withFocus from 'anchor-ui/focus-manager';
import MyComponent from './my-component';

const options = {
  style: {
    width: '100%',
    height: '100%'
  }
};

export default withFocus([], options)(MyComponent);
\`\`\`
`;
