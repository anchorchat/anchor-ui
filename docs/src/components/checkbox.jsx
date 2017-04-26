import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'underscore';
import Checkbox from '../../../dist/checkbox';
import Props from './props';
import components from '../../components.json';
import Paper from '../../../dist/paper';

const usage = '```js\n import Checkbox from \'anchor-ui/checkbox\';';

class CheckboxDoc extends Component {
  constructor() {
    super();

    this.state = {
      one: true,
      two: false
    };

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox(event) {
    this.setState({
      one: event.currentTarget.checked
    });
  }

  render() {
    const { one } = this.state;
    const { two } = this.state;
    const componentData = _.find(components, component => component.displayName === 'Checkbox');

    return (
      <article className="doc">
        <h1>Checkbox</h1>
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
            <Checkbox
              onChange={this.toggleCheckbox}
              label="Default checked"
              name="one"
              style={{ margin: '10px' }}
              checked={one}
            />
            <Checkbox
              onChange={() => {}}
              label="Unchecked"
              name="two"
              style={{ margin: '10px' }}
              checked={two}
            />
          </Paper>
        </section>
        <Props props={componentData.props} />
      </article>
    );
  }
}

export default CheckboxDoc;


/* function CheckboxDoc() {
  const componentData = _.find(components, component => component.displayName === 'Checkbox');

  return (
    <article className="doc">
      <h1>Checkbox</h1>
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
        <Paper style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: 0 }}>
          <Checkbox
            onChange={() => {}}
            label="Unchecked"
            name="example"
            style={{ margin: '10px' }}
          />
          <Checkbox
            onChange={() => {}}
            label="Checked"
            name="example"
            style={{ margin: '10px' }}
            checked
          />
        </Paper>
      </section>
      <Props props={componentData.props} />
    </article>
  );
}

export default CheckboxDoc; */
