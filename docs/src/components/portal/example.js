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
                <div>I got portaled to the bottom of this section!</div>
              </Portal>
              :null
          }
        </section>
      );
    }
  }
  \`\`\`
`;
