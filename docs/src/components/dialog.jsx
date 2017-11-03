import React, { Component } from 'react';
import _ from 'lodash';
import Dialog from '../../../dist/dialog';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Dialog from 'anchor-ui/dialog';
  \`\`\`
`;

class DialogDoc extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };

    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const componentData = _.find(components, component => component.displayName === 'Dialog');
    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      },
      button: { margin: '10px' }
    };

    return (
      <article className="doc">
        <h1>Dialog</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <Button
              style={style.button}
              onClick={this.toggleDialog}
            >
              Open Dialog
            </Button>
            <Dialog
              header="Hi!"
              hideDialog={this.toggleDialog}
              open={open}
            >
              <p>I&apos;m a dialog</p>
            </Dialog>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default DialogDoc;
