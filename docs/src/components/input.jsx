import React, { Component } from 'react';
import find from 'lodash/find';
import noop from 'lodash/noop';
import Input from '../anchor-ui/input';
import Props from './props';
import components from '../components.json';
import Paper from '../anchor-ui/paper';
import Markdown from './markdown';

const usage = `
  \`\`\`js
  import Input from 'anchor-ui/input';
  \`\`\`
`;

const componentData = find(components, { displayName: 'Input' });
const style = {
  paper: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: '20px'
  },
  input: { margin: '10px' }
};

class InputDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: 'Default value',
      valueMultiline: '',
      valueText: '',
      valueMaxLength: '',
      valueError: 'Value'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMultiline = this.handleChangeMultiline.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeMaxLength = this.handleChangeMaxLength.bind(this);
    this.handleChangeError = this.handleChangeError.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.currentTarget.value
    });
  }

  handleChangeMultiline(event) {
    this.setState({
      valueMultiline: event.currentTarget.value
    });
  }

  handleChangeText(event) {
    this.setState({
      valueText: event.currentTarget.value
    });
  }

  handleChangeMaxLength(event) {
    this.setState({
      valueMaxLength: event.currentTarget.value
    });
  }

  handleChangeError(event) {
    this.setState({
      valueError: event.currentTarget.value
    });
  }

  render() {
    const {
      value,
      valueMultiline,
      valueText,
      valueError,
      valueMaxLength
    } = this.state;

    return (
      <article className="page">
        <h1>Input</h1>
        <section>
          <h1>Description</h1>
          <p>{componentData.description}</p>
        </section>
        <Markdown markdown={usage} title="Code example" />
        <section>
          <h1>Examples</h1>
          <Paper style={style.paper}>
            <Input
              onChange={this.handleChange}
              value={value}
              type="text"
              label="Default value example"
              name="example"
              style={style.input}
            />
            <Input
              onChange={this.handleChangeMultiline}
              value={valueMultiline}
              type="text"
              label="Multiline value example"
              name="Multiline example"
              style={style.input}
              multiLine
            />
            <Input
              onChange={this.handleChangeText}
              value={valueText}
              placeholder="Placeholder text.."
              type="text"
              label="Text example"
              name="exampleText"
              style={style.input}
            />
            <Input
              onChange={this.handleChangeMaxLength}
              value={valueMaxLength}
              placeholder="Placeholder text.."
              type="text"
              label="Max length example"
              name="exampleMaxLength"
              maxLength={3}
              style={style.input}
            />
            <Input
              onChange={noop}
              value=""
              placeholder="Enter text.."
              type="text"
              label="Disabled example"
              name="exampleDisabled"
              style={style.input}
              inputStyle={style.inputStyle}
              disabled
            />
            <Input
              onChange={this.handleChangeError}
              value={valueError}
              placeholder="Placeholder text.."
              type="text"
              label="Error example"
              name="exampleError"
              error="Error message"
              style={style.input}
              inputStyle={style.inputStyle}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default InputDoc;
