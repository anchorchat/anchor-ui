import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Dialog from 'anchor-ui/dialog';
import Button from 'anchor-ui/button';
import Loader from 'anchor-ui/loader';
import _ from 'underscore';
import Props from './props';
import components from '../../components.json';

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
          <Button onClick={this.toggleDialog}>Open Dialog</Button>
          {
            open
            ? <Dialog
              headerText="Hi!"
              bodyText="I'm a dialog"
              hideDialog={this.toggleDialog}
              image={<Loader inverted />}
            />
            : null
          }
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default DialogDoc;
