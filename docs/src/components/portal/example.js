export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import Portal from 'anchor-ui/portal';

  class MyComponent extends Component {
    state = {
      portalOpen: false
    }

    togglePortal = () => {
      const { portalOpen } = this.state;

      this.setState({
        portalOpen: !portalOpen
      });
    }

    render() {
      const { portalOpen } = this.state;

      return (
        <section>
          <Button onClick={this.togglePortal}>Portal</Button>
          {
            portalOpen
              ? <Portal node={document.getElementById('root')}>
                // children to be portaled
              </Portal>
              :null
          }
        </section>
      );
    }
  }
  \`\`\`
`;
