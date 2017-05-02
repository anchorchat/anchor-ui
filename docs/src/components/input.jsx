import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Input from '../../../dist/input';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Input from \'anchor-ui/input\';';

class InputDoc extends Component {
  constructor() {
    super();

    this.state = {
      value: 'Default value',
      valueText: '',
      valueNumber: '',
      valueDate: '',
      valueMaxLength: '',
      valueError: 'Value'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeMaxLength = this.handleChangeMaxLength.bind(this);
    this.handleChangeError = this.handleChangeError.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.currentTarget.value
    });
  }

  handleChangeText(event) {
    this.setState({
      valueText: event.currentTarget.value
    });
  }

  handleChangeNumber(event) {
    this.setState({
      valueNumber: event.currentTarget.value
    });
  }

  handleChangeDate(event) {
    this.setState({
      valueDate: event.currentTarget.value
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
    const componentData = _.find(components, component => component.displayName === 'Input');
    const style = {
      paper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        margin: 0,
        padding: '20px'
      },
      input: { margin: '10px' }
    };

    return (
      <article className="doc">
        <h1>Input</h1>
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
          <Paper style={style.paper}>
            <Input
              onChange={this.handleChange}
              value={this.state.value}
              placeholder="Placeholder text.."
              type="text"
              label="Default value example"
              name="example"
              style={style.input}
            />
            <Input
              onChange={this.handleChangeText}
              value={this.state.valueText}
              placeholder="Placeholder text.."
              type="text"
              label="Text example"
              name="exampleText"
              style={style.input}
            />
            <Input
              onChange={this.handleChangeNumber}
              value={this.state.valueNumber}
              placeholder="Enter numbers.."
              type="number"
              label="Number example"
              name="example"
              style={style.input}
            />
            <Input
              onChange={this.handleChangeDate}
              value={this.state.valueDate}
              type="date"
              label="Date example"
              name="exampleDate"
              style={style.input}
            />
            <Input
              onChange={this.handleChangeMaxLength}
              value={this.state.valueMaxLength}
              placeholder="Placeholder text.."
              type="text"
              label="Max length example"
              name="exampleMaxLength"
              maxLength={3}
              style={style.input}
            />
            <Input
              onChange={() => {}}
              value=""
              placeholder="Enter text.."
              type="text"
              label="Disabled example"
              name="exampleDisabled"
              style={style.input}
              disabled
            />
            <Input
              onChange={this.handleChangeError}
              value={this.state.valueError}
              placeholder="Placeholder text.."
              type="text"
              label="Error example"
              name="exampleError"
              error="Error message"
              style={style.input}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default InputDoc;
