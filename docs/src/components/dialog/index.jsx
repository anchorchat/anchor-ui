import React, { Component } from 'react';
import find from 'lodash/find';
import Dialog from '../../../../dist/dialog';
import Button from '../../../../dist/button';
import Props from '../props';
import components from '../../../components.json';
import Paper from '../../../../dist/paper';
import Markdown from '../markdown';
import example from './example';

const componentData = find(components, { displayName: 'Dialog' });
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

class DialogDoc extends Component {
  state = {
    open: false
  }

  toggleDialog = () => {
    const { open } = this.state;

    this.setState({
      open: !open
    });
  }

  render() {
    const { open } = this.state;

    return (
      <article className="page">
        <h1>Dialog</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <section>
          <h1>Examples</h1>
          <Markdown markdown={example} title="Code example" />
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
