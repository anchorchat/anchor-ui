export default `
  \`\`\`jsx
  import React, { Component } from 'react';
  import Dialog from 'anchor-ui/dialog';

  class DialogExample extends Component {
    state = {
      open: false
    }

    toggleDialog = () => {
      this.setState({
        open: !this.state.open
      });
    }

    render() {
      const { open } = this.state;

      return (
        <section>
          <Button onClick={this.toggleDialog}>
            Open Dialog
          </Button>
          <Dialog
            header="Hi!"
            hideDialog={this.toggleDialog}
            open={open}
          >
            <p>I'm a dialog</p>
          </Dialog>
        </section>
      );
    }
  }

  export default DialogExample;
  \`\`\`
`;
