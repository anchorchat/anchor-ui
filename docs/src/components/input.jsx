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
      valueText: '',
      valueNumber: '',
      valueDate: ''
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
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

  render() {
    const componentData = _.find(components, component => component.displayName === 'Input');

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
          <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0, background: 'rgba(45, 55, 104, 0.85)' }}>
            <Input
              onChange={this.handleChangeText}
              value={this.state.valueText}
              placeholder="Placeholder text.."
              type="text"
              label="Text example"
              name="example"
              style={{ margin: '10px' }}
            />
            <Input
              onChange={this.handleChangeNumber}
              value={this.state.valueNumber}
              placeholder="Enter numbers.."
              type="number"
              label="Number example"
              name="example"
              style={{ margin: '10px' }}
            />
            <Input
              onChange={this.handleChangeDate}
              value={this.state.valueDate}
              type="date"
              label="Date example"
              name="example"
              style={{ margin: '10px' }}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default InputDoc;
