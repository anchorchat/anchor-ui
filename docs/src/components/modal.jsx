import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Modal from '../../../dist/modal';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Modal from \'anchor-ui/modal\';';

class ModalDoc extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    const componentData = _.find(components, component => component.displayName === 'Modal');

    return (
      <article className="doc">
        <h1>Modal</h1>
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
            <Button onClick={this.toggleModal}>Open Modal</Button>
            {
              open
              ? <Modal
                actions={[
                  <Button key="button" flatButton onClick={this.toggleModal}>Cancel</Button>,
                  <Button key="button1" flatButton onClick={this.toggleModal}>Ok</Button>
                ]}
              >
                <p>I&apos;m a modal</p>
              </Modal>
              : null
            }
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default ModalDoc;
