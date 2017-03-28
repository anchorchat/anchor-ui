import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Dialog from '../../../dist/dialog';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Dialog from \'anchor-ui/dialog\';';

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

    return (
      <article className="doc">
        <h1>Dialog</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Usage</h1>
          <ReactMarkdown source={usage} className="markdown" />
        </section>
        <section>
          <h1>Examples</h1>
          <Paper style={{ margin: 0, padding: '20px' }}>
            <Button onClick={this.toggleDialog}>Open Dialog</Button>
            {
              open
              ? <Dialog
                header="Hi!"
                hideDialog={this.toggleDialog}
              >
                <p>I&apos;m a dialog</p>
              </Dialog>
              : null
            }
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default DialogDoc;
