import React, { Component } from 'react';
import find from 'lodash/find';
import Modal from '../../../dist/modal';
import Button from '../../../dist/button';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Modal from 'anchor-ui/modal';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Modal' });
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

    return (
      <article className="page">
        <h1>Modal</h1>
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
              onClick={this.toggleModal}
            >
              Open Modal
            </Button>
            <Modal
              actions={[
                <Button key="button" flatButton onClick={this.toggleModal}>Cancel</Button>,
                <Button key="button1" flatButton onClick={this.toggleModal}>Ok</Button>
              ]}
              open={open}
            >
              <p>I&apos;m a modal</p>
            </Modal>
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default ModalDoc;
